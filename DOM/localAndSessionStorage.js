/*
    sessionStorage and localStorage have a similar interface
*/

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// // clear local storage
// localStorage.clear();

// // set session storage
// sessionStorage.setItem('name', 'Beth');


// // remove from storage
// // localStorage.removeItem('name');

// // get from storage
// let val;
// let _name = localStorage.getItem('name');
// val = _name;

// let age = Number(localStorage.getItem('age'));

// val = age;

// console.log(val, typeof val);

document.querySelector('form').addEventListener('submit', 
function(event) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));


    alert('Task Saved');
    event.preventDefault();
})


/* JSON library is used to serialize and deserialize objects */

