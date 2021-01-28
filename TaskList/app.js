/* CHALLENGE: try to make these components as decoupled as possible
    
    considerations for functionality:
    
    - need to be able to add <li> elements to the list
*/

// Define UI vars (components)
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('a.clear-tasks');
const taskFilter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// register events
function loadEventListeners() {
    // component.addEventListener('event type', handler);
}


function createListItem(contentText, href="#", classes = "", id = "") {
    
    /* create a list item */
    let li = document.createElement('li');
    li.textContent = contentText;

    // add options
    li.setAttribute('href', href);

    if (classes) {  // empty strings are falsey
        let classList = classes.split(" ");
        console.log(classList);
        classList.forEach(function(element) {
            li.classList.add(`${element}`)
        })
    };

    if (id) { li.setAttribute('id', id)};
    
    // deliver result
    return li;
}
function addTask(event, taskName) {
    /* add a task to the list in the way that we need things to be done */
    createListItem(taskName)
}



/* TEST SUITE */
console.log("TEST SUITE");
// validate components
console.log(taskInput);
console.log(taskFilter);
console.log(clearBtn);
console.log(tasksList);
console.log(form);

// validate functions
console.log(createListItem("HELLO THERE!"));
console.log(createListItem("Custom href", 'not #'));
console.log(createListItem("custom class list", "#", "class1 class2", "customid"));

console.log("END TESTS");



