// add a task to the tasks list using the Add Task button

// type the text to add
// fire the submit event
//      construct a new li element
//      add new li element to the end of the list

function addTask(event) {
    event.preventDefault();
    const input = event.target.querySelector('input');
    let inputText = input.value;

    if (inputText) {

        // create the new full li element
        const newLi = document.createElement('li');
        newLi.classList.add('collection-item');
        newLi.setAttribute('id', 'newest-li');
        newLi.textContent = inputText;

        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.classList.add('delete-item');
        link.classList.add('secondary-content');

        const i = document.createElement('i');
        i.classList.add('fa');
        i.classList.add('fa-remove');

        // assemble the elements
        link.appendChild(i);
        newLi.appendChild(link);
        const parent = document.querySelector('ul');
        parent.appendChild(newLi);

        // clean up
        input.value = "";
    }
    // debug
    // console.log();
}


// seems like only forms can listen for submit buttons
const submit = document.querySelector('form');
submit.addEventListener('submit', addTask);

console.log(submit);