/* mouse driven events */

const clearTasks = document.querySelector('.clear-tasks');
clearTasks.setAttribute('href', '#');
const card = document.querySelector('.card');
const heading = document.querySelector('#task-title');


// Event Handler
function runEvent(event) {
    console.log(`EVENT TYPE: ${event.type}`); 
}

// Click
// clearTasks.addEventListener('click', runEvent);

// Double click
// clearTasks.addEventListener('dblclick', runEvent);

// Mouse down - on press
// clearTasks.addEventListener('mousedown', runEvent);

// Mouse up - on release
// clearTasks.addEventListener('mouseup', runEvent);


// Mouse enter and mouse leave only fire off upon entry exit.
// Mouse Enter - when the mouse enters the element area
// card.addEventListener('mouseenter', runEvent);

// Mouse leave - when the mouse leaves the element area
// card.addEventListener('mouseleave', runEvent);

// Mouse over and mouse out fire even when moving inside the same element
// they are triggered when you move the mouse over to a new element, even if nested, within the main element
// Mouse over
// card.addEventListener('mouseover', runEvent);

// Mouse out
// card.addEventListener('mouseout', runEvent);

function customEvent(event) {
    heading.textContent = `${event.clientX}, ${event.clientY}`;
    document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 40)`;
}

// Mouse move
card.addEventListener('mousemove', customEvent); 