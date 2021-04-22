// components
const userForm = document.querySelector('#user-form');
const userFormSubmit = userForm.querySelector('input[type=submit]');

const userFormInputs = {  // inputs from the ui/DOM
    name: userForm.querySelector('#name'),
    zip: userForm.querySelector('#zip'),
    email: userForm.querySelector('#email'),
    phone: userForm.querySelector('#phone'),
    submit: userFormSubmit,
}


// event listeners
/* 
Design: 
    I want to build type-along validation for each individual field 
    in addition to validation upon submission

    Each field will need an event listener
*/


// event handlers
nameValidator = (event) => console.log("nameValidator()");
zipValidator = (event) => console.log("zipValidator()");
emailValidator = (event) => console.log("emailValidator()");
phoneValidator = (event) => console.log("phoneValidator()");
validateForm = (event) => console.log("validateForm()");


// register events
function loadEventListeners() {
    userFormInputs.name.addEventListener('keyup', nameValidator);
    userFormInputs.zip.addEventListener('keyup', zipValidator);
    userFormInputs.email.addEventListener('keyup', emailValidator);
    userFormInputs.phone.addEventListener('keyup', phoneValidator);

    userForm.addEventListener('submit', validateForm);
}


// init
loadEventListeners();
