/* CREATING ELEMENTS & INSERTING THEM INTO THE DOM */


// Create the element
let li = document.createElement('li');

// add a class to our element
li.className = "collection-item"; /* or */ li.setAttribute('class', "collection-item");

// add an id
li.id = "new-item"; /* or */ li.setAttribute('id', "new-item");

// add attribute
li.title = "title"; /* or */ li.setAttribute('title', "New Item");

// Create text node within the element
li.appendChild(document.createTextNode('Hello World!'));

// Create new link element
const link = document.createElement('a');
link.setAttribute('class', 'delete-item secondary-content');

// Add icon html
link.innerHTML = "<i class='fa fa-remove'></i>";

// tack the link onto the li element
li.appendChild(link);

// INSERT THE ELEMENT INTO THE DOM
// append the li as child to ul

let ul = document.querySelector('ul.collection');
ul.appendChild(li);



console.log(li);