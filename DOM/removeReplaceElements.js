// REPLACE ELEMENTS


// Create Element
const newHeading = document.createElement('h2');

// add an id
newHeading.id = "task-title";

// add a text node
newHeading.appendChild(document.createTextNode('REPLACED LIST TITLE'));

// get the old heading instance
const oldHeading = document.getElementById('task-title');

// get the parent to call "replaceChild"
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// REMOVE ELEMENTS
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[3].remove();
list.removeChild(lis[0]);

newHeading.remove();

// try replacing card-title element with a new element
const newCardTitle = document.createElement('span');
newCardTitle.setAttribute('class', 'new-card-title');
newCardTitle.textContent = "HELLO";
const currentCardTitle = document.querySelector('span');
const parent = currentCardTitle.parentElement;
parent.replaceChild(newCardTitle, currentCardTitle);

console.log(currentCardTitle);
console.log(newCardTitle);

/* CLASSES AND ATTRIBUTES */

// CLASSES
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);

// const a = firstLi.querySelector('a:first-child');

const link = firstLi.children[0];
let val;

val = link.className; // returns string literal of class names
val = link.classList; // return an array-like DOM Token List
val = link.classList[0];

link.classList.add('test');
val = link;

link.classList.remove('test');
val = link

;


// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://www.google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link;

link.removeAttribute('title');

console.log(val);

