// API Reference: https://www.wix.com/velo/reference/api-overview/introduction// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world$w.onReady(function () {    // Write your JavaScript here    // To select an element by ID use: $w("#elementID")    // Click "Preview" to run your code});
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
});
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
});


/**
 *	Adds an event handler that runs when the dataset is ready.
 */
export function dataset2_ready() {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
  $w('#dataset2').setFieldValue('status', 'OPEN');
}

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
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
export function email_blur(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	setTimeout(() => {
	let isValid = event.target.valid;
	let inputValue =event.target.value["formatted"];
	if(isValid) {
		$w("#errorEmail").hide();
		$w("#register").enable();
	} else {
		$w("#errorEmail").show();
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
	let inputValue =event.target.value["formatted"];
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
	let inputValue =event.target.value["formatted"];
	if(isValid && inputValue && inputValue.length <= 50) {
		$w("#errorAddressInput2").hide();
		$w("#register").enable();
	} else {
		$w("#errorAddressInput2").show();
		$w("#register").disable();
	}
   }, 10);
}
