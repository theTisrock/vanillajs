// document.getElementById('id-selector');

let element = window.document.getElementById('task-title');

console.log(element);

// get things from the selected element

console.log(element.id);
console.log(element.className);


// Change style

window.document.getElementById('task-title').style.background = '#aaa';
window.document.getElementById('task-title').style.color = '#fff';
window.document.getElementById('task-title').style.padding = '10px';
// window.document.getElementById('task-title').style.display = 'none';

// Change content
window.document.getElementById('task-title').textContent = 'Tasks List';
window.document.getElementById('task-title').innerText = 'My Tasks List';
window.document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// Document query selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue'; // nested html selector
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:last-child').textContent = 'Hello World';