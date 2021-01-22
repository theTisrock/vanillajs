/* Listening for events 
    They enable us to manipulate the DOM or data in response to an event.
    ... if we want to. 
*/


// add an event listener onto the "clear tasks" button

const clearTasks = document.querySelector('.clear-tasks');

// clearTasks.setAttribute('href', '#');  // keeps browser from reloading, redirecting, etc.

/* clearTasks.addEventListener('click', 
function(event) {
    event.preventDefault(); // line 8 not needed if preventDefault() called
    console.log('Hello World');
}); */


clearTasks.addEventListener('click', onClick);  // this works because of hoisting
clearTasks.setAttribute('href', '#');

function onClick(event) {
    // console.log('clicked');

    let val;

    val = event;

    // Event target element
    /* val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;
    event.target.textContent = "hello"; */

    let element = event.target;  // simply the html element that had an action performed upon it

    if (element.textContent === 'BYE') {
        element.textContent = 'HELLO';
    } else {
        element.textContent = 'BYE';
    }

    // event type
    val = event.type;

    // time stamp
    val = event.timeStamp;

    // Coordinates event relative to the window
    val = event.clientY;
    val = event.clientX;

    // Coordinates event location relative to the element
    val = event.offsetY;
    val = event.offsetX;

    console.log(val);
}