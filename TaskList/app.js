/* CHALLENGE: try to make these components as decoupled as possible

    trying to use pure functions as much as possible
    
    considerations for functionality:
    
    - need to be able to add <li> elements to the list
*/

// Define UI vars (components)
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('a.clear-tasks');
const taskFilter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


function _addClassList(classes, targetElement) {
    let classList = classes.split(" ");

    classList.forEach(function(element) {
        targetElement.classList.add(`${element}`);
    })
}


function createAnchorLink(href='#', classes = "") {
    const anchor = document.createElement('a');

    anchor.setAttribute('href', href);
    _addClassList(classes, anchor);

    return anchor;
}


function createListItem(contentText, href="#", classes = "") {
    let li = document.createElement('li');
    
    li.appendChild(document.createTextNode(contentText));
    li.setAttribute('href', href);
    _addClassList(classes, li);
    
    return li;
}


function addTaskEvent(event) {
    event.preventDefault();

    if (taskInput.value === "") {
        alert("Add a task");
    } else {
        const taskName = taskInput.value;
        const tasks = document.querySelector('.collection');
        const li = createListItem(taskName, "#", 'collection-item task');
        const anchor = createAnchorLink("#", "delete-item secondary-content");
        anchor.innerHTML = "<i class='fa fa-remove'></i>"
        
        li.appendChild(anchor);
        tasks.appendChild(li);

        taskInput.value = "";
    }
}


function clearTasksEvent(event) {
    const tasks = tasksList.querySelectorAll('li');
    tasks.forEach(function(element) {
        element.remove();
    });
}


function deleteTask(element) {
    if (element.id === "delete-element") {  // check for deletion marker
        element.remove();
    }
}

let extractedTarget;

function deleteTaskEvent(event) {
    event.preventDefault();
    const deleteIconTouched = event.target.localName.localeCompare("i") === 0;
    
    if (deleteIconTouched) {
        extractedTarget = event.target;
        console.log(event.target);

        const icon = event.target;  // acquire the task
        const task = icon.parentElement.parentElement;
        task.setAttribute('id', 'delete-element');  // mark for deletion
        deleteTask(task);

        if (document.querySelector('delete-element') != null)  // clean up
            console.error('Failed to delete an element when attempting to delete a task!');
    }
}


function loadEventListeners() {
    // component.addEventListener('event type', handler);
    form.addEventListener('submit', addTaskEvent);
    clearBtn.addEventListener('click', clearTasksEvent);
    tasksList.addEventListener('click', deleteTaskEvent);

    console.log("Loaded event listeners");
};


/* TEST SUITE */
function runTests() {
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

    console.log("END TESTS\n");
}


/* Initialize */
// runTests();
loadEventListeners();



