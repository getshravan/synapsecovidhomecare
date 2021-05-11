// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import wixUsers from 'wix-users';
$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
	let user = wixUsers.currentUser;
	let userEmail;
	user.getEmail()
  	.then( (email) => {
    	userEmail = email; // "user@something.com"
		console.log(userEmail);
		$w('#email').value = userEmail;
		$w('#email').readOnly = true;
  	});
});

export function firstName_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	  let isValid = event.target.valid;
	if(isValid) {
		$w("#errorFirstName").hide();
		$w("#register").enable();
	} else {
		console.log(" First name invalid "+isValid);
		$w("#errorFirstName").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function lastName_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorLastName").hide();
		$w("#register").enable();
	} else {
		$w("#errorLastName").show();
		$w("#register").disable();
	}
   }, 10);
}


/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function phone_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorPhone").hide();
		$w("#register").enable();
	} else {
		$w("#errorPhone").show();
		$w("#register").disable();
	}
   }, 10);
}


/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function addressInput1_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	let inputValue = event.target.value && event.target.value["formatted"];
	if(isValid && inputValue && inputValue.length <= 50) {
		$w("#errorAddressInput1").hide();
		$w("#register").enable();
	} else {
		$w("#errorAddressInput1").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function addressInput2_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	let inputValue = event.target.value && event.target.value["formatted"];
	if(isValid && inputValue && inputValue.length <= 50) {
		$w("#errorAddressInput2").hide();
		$w("#register").enable();
	} else {
		$w("#errorAddressInput2").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function speciality_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorSpeciality").hide();
		$w("#register").enable();
	} else {
		$w("#errorSpeciality").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
*	Adds an event handler that runs when the mouse pointer is moved
 off of the element.

 > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
 a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
 and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
 [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
*	 @param {$w.MouseEvent} event
*/
export function languageTags_mouseOut(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorLanguageTags").hide();
		$w("#register").enable();
	} else {
		$w("#errorLanguageTags").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function qualification_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorQualification").hide();
		$w("#register").enable();
	} else {
		$w("#errorQualification").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function yoe_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorYoe").hide();
		$w("#register").enable();
	} else {
		$w("#errorYoe").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function password_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorPassword").hide();
		$w("#register").enable();
	} else {
		$w("#errorPassword").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function state_blur_1(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorRegNumber").hide();
		$w("#register").enable();
	} else {
		$w("#errorRegNumber").show();
		$w("#register").disable();
	}
   }, 10);
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
export function regNumber_blur_1(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	if(isValid) {
		$w("#errorRegNumber").hide();
		$w("#register").enable();
	} else {
		$w("#errorRegNumber").show();
		$w("#register").disable();
	}
   }, 10);
}


/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function firstName_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('firstName',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function lastName_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('lastName',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function phone_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('phone',event.target.value);
	$w('#dynamicDataset').save();
}




/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function qualification_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('educationalQualification',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function yoe_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('yearsofExperience',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function speciality_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('specialization',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function addressInput2_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('address',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function languageTags_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('languages',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function addressInput1_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('hospitalName',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function bio_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('bio',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function state_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('registrationState',event.target.value);
	$w('#dynamicDataset').save();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function regNumber_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dynamicDataset').setFieldValue('kmcRegNum',event.target.value);
	$w('#dynamicDataset').save();
}



