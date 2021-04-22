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
