/*
    Events Bubbling Up through the DOM via their parent elements.
    Event delegation goes the other way.

    Bubbling up & delegating down
*/


// EVENT BUBBLING
// Parents can listen to events coming from their child elements

// function cardTitleFunc() {
//     console.log('card title');
// }

// function cardContentFunc() {
//     console.log('card content');
// }

// function cardFunc() {
//     console.log('card');
// }

// function colFunc(event) {
//     console.log('col');
//     console.log(event.target);  // the origin target is passed through the event object
// }

// const cardTitle = document.querySelector('.card-title');
// cardTitle.addEventListener('click', cardTitleFunc);

// const cardContent = document.querySelector('.card-content');
// cardContent.addEventListener('click', cardContentFunc);

// const card = document.querySelector('.card');
// main.addEventListener('click', cardFunc);

// const col = document.querySelector('.col');
// col.addEventListener('click', colFunc);

// Critical thinking: How might this be useful?
// if parent elements listen to child element events, do they also 'listen'
// to data? can they pass data up and down? 
// try inserting the event arugment and see what element shows up
// as the target.

// EVENT DELEGATION

function _in(x, list) {
    for (let i=0; i<list.length; i++) {
        if (list[i] === x) {
            return true;
        }
    }

    return false;
}

function deleteItem(event) {
    // if (event.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('delete item');
    // }

    if (_in('delete-item', event.target.parentElement.classList)) {
        // console.log('delete item');
        event.target.parentElement.parentElement.remove();
    }
}

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);
// We're going to target elements from the above parent element

// The (intentional) problem with the code above: this delete logic needs to be delegated to 
// all the list items and not just the first one. We used querySelector, which only selected the first li

/* In short, delegation involves

1) putting a listener on the parent
2) finding the target
3) define the functionality
*/


