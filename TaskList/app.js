/* CHALLENGE: try to make these components as decoupled as possible

    trying to use pure functions as much as possible
    
    considerations for functionality:
    
    - need to be able to add <li> elements to the list
*/

// grab UI components
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('a.clear-tasks');
const taskFilter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


/* local storage functions */
function saveTasks() {
    /* approach 1: save all tasks by grabbing the UI elements. */
    const tasks = tasksList.querySelectorAll('li');
    let rawTasks = [];
    
    tasks.forEach(function(taskElement) {
        rawTasks.push(taskElement.textContent);
    });

    const serialized = JSON.stringify(rawTasks);
    localStorage.setItem('tasks', serialized)
}


function getTasks(key) {
    /* returns task array or null */
    let raw = localStorage.getItem(key);
    let native = JSON.parse(raw);
    return native;
}


function loadTasks() {
    /* loads tasks into the DOM at load time */
    const textList = getTasks('tasks');

    textList.forEach(function(text) {
        addTask(text);
    });
}


function loadTasksEvent(event) {
    loadTasks();
}


function _addClassList(classes, targetElement) {
    let classList = classes.split(" ");

    classList.forEach(function(element) {
        targetElement.classList.add(`${element}`);
    })
}


/* DOM manipulation */
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


function addTask(taskName) {
    /* add a task to the ul in the DOM */
    const tasks = document.querySelector('.collection');
    
    const task = createListItem(taskName, "#", 'collection-item task');
    const anchor = createAnchorLink("#", "delete-item secondary-content");
    anchor.innerHTML = "<i class='fa fa-remove'></i>"
    
    task.appendChild(anchor);
    tasks.appendChild(task);
}


function addTaskEvent(event) {
    event.preventDefault();

    if (taskInput.value === "") {
        alert("Add a task");
    } else {
        const taskName = taskInput.value;
        addTask(taskName);
        taskInput.value = "";
        saveTasks();  // local storage
    }
}


function clearTasksEvent(event) {
    const tasks = tasksList.querySelectorAll('li');
    tasks.forEach(function(element) {
        element.remove();
        saveTasks();  // local storage
    });
}


function deleteTask(element) {

    if (element.id === "delete-element") {  // check for deletion marker
        element.remove();
    }
    saveTasks();  // local storage
    /* saveTasks() looks at the li elements to save it's list. Is there anything wrong with doing that? Something feels wrong! */
}


function deleteTaskEvent(event) {
    event.preventDefault();
    const deleteIconTouched = event.target.localName.localeCompare("i") === 0;
    
    if (deleteIconTouched) {
        const icon = event.target;  // acquire the task
        const task = icon.parentElement.parentElement;
        task.setAttribute('id', 'delete-element');  // mark for deletion
        deleteTask(task);

        if (document.querySelector('delete-element') != null)  // clean up
            console.error('Failed to delete an element when attempting to delete a task!');
    }
}


function taskFilterEvent(event) {
    let filterText = taskFilter.value;
    const tasks = tasksList.querySelectorAll('li');

    tasks.forEach(function(task) {
        let text = task.textContent;

        if (text.indexOf(filterText) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}


function loadEventListeners() {
    // component.addEventListener('event type', handler);
    document.addEventListener('DOMContentLoaded', loadTasksEvent)
    form.addEventListener('submit', addTaskEvent);
    clearBtn.addEventListener('click', clearTasksEvent);
    tasksList.addEventListener('click', deleteTaskEvent);
    taskFilter.addEventListener('keyup', taskFilterEvent);

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



