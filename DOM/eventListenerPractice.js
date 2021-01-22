/* a scratch pad for event listener practice */

// toggle the list items color

let add_task;

let inputs = document.querySelectorAll('input');

inputs.forEach(function(element, index) {  // obtain the target element
    if (element.hasAttribute('value') && element.value === 'Add Task') {
        add_task = element;
    }
});

function onClick(event) {
    const list_items = document.querySelectorAll('li');

    list_items.forEach(function(element, index) {
        let adjusted_index = index + 1;  // correct for zero based indexing
        (adjusted_index % 2 === 0) ? element.style.color = "red" : element.style.color = "blue";
    });
}

add_task.addEventListener('click', onClick);

console.log(add_task);