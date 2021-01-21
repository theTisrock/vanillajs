/* 
    DOM Selectors pull elements, nodes, and other things from the DOM.
*/

// There are Single and Multi Element selectors. Single Selectors just grab the FIRST element.
// Multi element selectors grab an HTML Collection


// ***** document.getElementById() - has been around for a long time, less flexible than it's alternative.

// console.log(document.getElementById('task-title'));

// // Fetch the element

// const taskTitle = document.getElementById('task-title');


// // Get things from the element...

// console.log(taskTitle.id);
// console.log(taskTitle.className);

// // Set style
// taskTitle.style.background = 'grey';
// taskTitle.style.color = 'white';
// taskTitle.style.padding = '15px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content - could be useful for Ajax calls
// taskTitle.textContent = 'Tasks List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.textContent = 'Try This';
// taskTitle.innerHTML = '<span style="color:red">HELLO</span>'

// ***** document.querySelector()


console.log(document.querySelector('#task-title'));  // by ID
console.log(document.querySelector('.card-title'));  // by class
console.log(document.querySelector('h5'));  // by html element

const firstLi = document.querySelector('li');
firstLi.style.color = "red";

const nestedLi = document.querySelector('ul li');
firstLi.style.color = "blue";

const lastLi = document.querySelector('li:last-child');
lastLi.style.color = 'red';

