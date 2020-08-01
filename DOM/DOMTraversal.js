/* 
Traversing the Document Object Model 

aka

Dealing with the DOM parent-child structure
*/

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

/* 
Before going further, 
what is the difference between querySelector/querySelectorAll VS getElementBy[Id,ClassName, etc]

qS/qSA VS gEB: 
- an interface for every element of the DOM VS only accessible from document. context
- new VS old
- highly flexible VS rigid

Observations:
- getElementBy[Id,ClassName, etc] returns objects that contain querySelector methods.
 */

// Examing the properties of the above selected nodes

val = list.childNodes; // returns NodeList
val = list.children; // return HTMLCollection

val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

/*
1 - Element
2 - Attribute (deprecated)
3 - Text node 
8 - Comment
9 - Document itself
10 - Doctype
*/

val = list.childNodes;
val = list.childNodes[1].nodeType;

// children usually used more than childNodes
val = list.children;
val = list.children[0];
list.children[0].textContent = 'hello';

// Children of Children
list.children[3].children[0].id = 'custom'
val = list.children[3].children[0];

val = list.firstChild; // might give text nodes
val = list.firstElementChild; // entire element. 

val = list.lastChild;
val = list.lastElementChild;

Array.from(list.children).forEach(function(item, index) {
    item.id = `list-item-${index}`;
});

// Count child elements
val = list.childElementCount;

// Get parent element
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get parent node
val = listItem.parentNode;
val = listItem.parentNode.parentNode;

// Sibling
val = listItem.nextSibling; // Node
val = listItem.nextElementSibling.nextElementSibling; // element

val = listItem.previousSibling; // Node
val = listItem.previousElementSibling.previousElementSibling; // element

console.log(val);
