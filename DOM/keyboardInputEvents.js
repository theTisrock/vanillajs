const form = document.querySelector('form');
form.setAttribute('action', '#');
const taskInput = document.getElementById('task');
const heading = document.querySelector('#task-title');
const select = document.querySelector('select');

// clear input
taskInput.value = "";
taskInput.setAttribute('placeholder', 'Walk the Dog');

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// focus
// taskInput.addEventListener('focus', runEvent);

// blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input  // this reminds me of data binding one way
// taskInput.addEventListener('input', runEvent);

// Change event
select.addEventListener('change', runEvent);

function runEvent(event) {
    // event.preventDefault();
    console.log(`EVENT TYPE: ${event.type}`);

    console.log(event.target.value);

    heading.innerText = event.target.value;

    // get input value
    // console.log(taskInput.value);
}

// form.addEventListener('submit', runEvent);

