/* SKIPPING WHILE, DO WHILE, CONTINUE, BREAK

/* FOR LOOP */
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car, index, array){ // function can take in up to 3 args, but 1 required
    console.log(`${car} ${index} ${array}`);
});

/* MAP */
const users = [
    {'id': 1, name: 'john'},
    {'id': 2, name: 'sarah'},
    {'id': 3, name: 'Karen'},
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);

/* 
how is map useful? 

use it to collect things while avoiding iterative boilerplate? No loop structure, similar to forEach.
More declarative, less imperative.
Similar to list comprehension in python.
*/

// map vs forEach
function funk(thing) {
    return thing.id;
}

function getArr(array, funk) {

    let results = [];
    array.forEach(function(arr) {
        results.push(funk(arr));
    });
    return results;

}

let newArr = getArr(users, funk);
console.log(newArr);


/* FOR IN LOOP */
const user = {
    name: 'Chris',
    age: 31,
    address: 'Charlotte NC',
};

for (let attr in user) {
    console.log(attr);
    console.log(user[attr]);
}