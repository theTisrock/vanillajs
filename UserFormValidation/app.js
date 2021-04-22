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
showInvalid = (component) => component.classList.add('is-invalid');
showValid = (component) => component.classList.remove('is-invalid');


validateField = (fieldName, regex) => {  // One validator to rule them all!!!
    let is_valid = false;
    const re = regex;
    const inputComponent = userFormInputs[fieldName];

    const value = inputComponent.value;
    if (value != '')
        is_valid = re.test(value);

    return is_valid;
};


nameValidator = (event) => {
    const is_valid = validateField('name', /^[A-Za-z]{2,10}$/);
    is_valid ? showValid(userFormInputs['name']) : showInvalid(userFormInputs['name']);
};


zipValidator = (event) => {
    const is_valid = validateField('zip', /\d{5}(-[0-9]{4})?/);
    is_valid ? showValid(userFormInputs['zip']) : showInvalid(userFormInputs['zip']);
};


emailValidator = (event) => {
    const is_valid = validateField('email', /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    is_valid ? showValid(userFormInputs['email']) : showInvalid(userFormInputs['email']);
};


phoneValidator = (event) => {
    const is_valid = validateField('phone', /\d{3}-\d{3}-\d{4}/);
    is_valid ? showValid(userFormInputs['phone']) : showInvalid(userFormInputs['phone']);
};

validateUser = (event) => console.log("validateUser()");


// register events
function loadEventListeners() {
    userFormInputs.name.addEventListener('keyup', nameValidator);
    userFormInputs.zip.addEventListener('keyup', zipValidator);
    userFormInputs.email.addEventListener('keyup', emailValidator);
    userFormInputs.phone.addEventListener('keyup', phoneValidator);

    userForm.addEventListener('submit', validateUser);
}


// init
loadEventListeners();
