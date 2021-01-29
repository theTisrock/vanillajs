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


function createListItem(contentText=taskInput.value, href="#", classes = "") {
    
    /* create a list item */
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(contentText));

    // add options
    li.setAttribute('href', href);

    if (classes) {  // empty strings are falsey
        let classList = classes.split(" ");
        console.log(classList);
        classList.forEach(function(element) {
            li.classList.add(`${element}`)
        })
    };
    
    // deliver result
    return li;
}


function addTaskEvent(event) {
    event.preventDefault();
    if (taskInput.value === "") {
        alert("Add a task");
    }

    const taskName = taskInput.value;
    const tasks = document.querySelector('.collection');  // acquire the list to append this child too
    const li = createListItem(taskName, "#", 'collection-item');
    tasks.appendChild(li);
}

// register events
(function loadEventListeners() {
    // component.addEventListener('event type', handler);
    form.addEventListener('submit', addTaskEvent);

    console.log("Loaded event listeners");
})();


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
console.log(createListItem("custom class list", "#", "class1 class2"));
console.log(createListItem("HELLO THERE!"));

console.log("END TESTS");



