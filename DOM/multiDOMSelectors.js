// // document.getElementByClassName

// /* global scope execution includes all classes named collection-item*/
// let items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'hello';

// /* 
// nested scope execution includes only classes named collection-item nested inside the selected element 
// (the selected section of the DOM)
// */
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


// // document.getElementByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[2]);
// lis[2].style.color = 'red';
// lis[3].textContent = 'some text';

// /* REMINDER: these html collections ARE NOT ARRAYS. If they must be used as arrays
// then they must be converted first.*/

// console.log(lis); // collection
// lis = Array.from(lis);

// lis.reverse();
// console.log(lis); // array

// // document.querySelectorAll. NodeList (as opposed to HTML collection)

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
    item.textContent = `hello ${index}`;
})


document.querySelectorAll('li:nth-child(odd').forEach(function(item) {
    item.style.background = 'red';
});

document.querySelectorAll('li:nth-child(even').forEach(function(item) {
    item.style.background = 'grey';
});

console.log(items);