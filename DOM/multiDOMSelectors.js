/* Select more than 1 element and return an HTMLCollection or NodeList */

// document.getElementsByClassName() return HTMLCollection

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'HELLO';

/* 
BELOW LINE:
document.querySelector('ul') scopes/provides context for the subsequentgetElementByClassName. 
if an element existed outside the 'ul' with the 'collection-item' class name and context had not been narrowed, 
ALL instances would have been returned as part of the HTMLCollection result.
*/
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// document.getElementByTagName()

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'YO MOMMA';

console.log(Array.isArray(lis));
lis = Array.from(lis);
console.log(Array.isArray(lis));

lis.reverse();

lis.forEach(function(li, index) {
    li.textContent = `index ${index}`;
});


/*
    querySelectorAll returns a NodeList, which extends beyond the HTML Collection by
    including document elements, plus text nodes. It can also return an array and does not 
    require conversion.
 */

// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items, items[0]);


// items.forEach(function(item) {
//     console.log(item.textContent);
// });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item) {
    item.style.background = "#ccc";
});

liEven.forEach(function(item) {
    item.style.background = "#f00";
});

/* closing thoughts is that query selectors should be more flexible. */
