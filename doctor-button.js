// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import wixUsers from 'wix-users';
import wixData from 'wix-data';
import wixLocation from 'wix-location';
$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
});

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function doctorName_click_1(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	let loggedIn = wixUsers.currentUser.loggedIn;
  let userId = wixUsers.currentUser.id;
  let loggedInEmail;
  wixUsers.currentUser.getEmail().then( (email) => {
      loggedInEmail = email;
  });
if(loggedIn && userId) {
  wixData.query("DoctorRegistration")
         .eq("_owner",userId)
         .or(
             wixData.query("DoctorRegistration")
            .eq("_id", userId)
            )
         .find()
         .then( (results) => {
        if (results.items.length <= 0)
        {
          console.log(results);
			    console.log("++++++++++++++++++++++++++++no item found++++++++++++");
			    wixLocation.to(`/copy-of-doctor-registration`); 
        }
        else
        {
          console.log("++++++++++++++++++++++++++++item found++++++++++++: "+loggedInEmail);
          console.log(results);
          console.log(results.items.length);
          wixLocation.to(`/doctor-registration-2/${loggedInEmail}`);
        }
    });
} else {
	console.log("user undefined: "+ userId);
  setTimeout(() => {
	  wixUsers.promptLogin()
  .then( (user) => {
    let userId = user.id;           // "r5me-6fem-45jf-djhe-484349"
    let isLoggedIn = user.loggedIn; // true
    let userRole = user.role;       // "member"
    return user.getEmail();
  } )
  .then( (email) => {
    let userEmail = email;          // "user@something.com"
  } )
  .catch( (err) => {
    let errorMsg = err;             // "The user closed the login dialog"
  } );
	
   }, 20);
   wixLocation.to(`/copy-of-doctor-registration`);
  }
}
