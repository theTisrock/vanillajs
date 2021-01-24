/*
    make the clear tasks button functional (from DOM perspective only)
*/

const clearTasksBtn = document.querySelector('.clear-tasks');
clearTasksBtn.setAttribute('href', '#');

function clearTasks(event) {
    const classList = event.target.classList;
    const listItems = document.querySelectorAll('li');

    if (classList.contains('clear-tasks')) {
        listItems.forEach(function(element) {
            element.remove();
        });
    }
}

document.body.addEventListener('click', clearTasks);