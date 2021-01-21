let val;

const list = document.querySelector('ul');
const listitem = document.querySelector('li.collection-item:first-child');

val = listitem;
val = list;

// CHILD NODES
val = list.childNodes;  // line breaks can show up as text nodes
val = list.childNodes[0].nodeType;

// Get children - gets the HTML Collection elements, no text nodes
// val = list.children;

// children will be used more than childNodes
// Why?
/* Probably because nodes include text node content as well, so it might be easier to parse 
an HTMLCollection as opposed to NodeLists */

val = list.children;
val = list.children[0];

list.children[0].textContent = "NO TASK";

// get children of children
list.children[3].children[0].id = "test-id";
val = list.children[3].children[0];

val = list.firstChild;  // first node
val = list.firstElementChild;

val = list.lastChild;
list.lastElementChild.id = "last-one"
val = list.lastElementChild;

val = list.childElementCount;


// PARENT NODES
val = listitem.parentNode;
val = listitem.parentElement;
val = listitem.parentElement.parentElement;

// SIBLING
val = listitem.nextSibling;
val = listitem.nextElementSibling.nextElementSibling;

val = listitem.previousSibling;
val = listitem.previousElementSibling;



console.log(val);