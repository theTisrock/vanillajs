/* Create some arrays */

const numbers = [43, 56, 33, 23, 44 , 36 ,5];
const numbers2 = new Array(22, 35, 76);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = ['yahoo', null, '', {a: 'first', b: 'second'}, 44.3];


let val;

// get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);
val = Array.isArray('string');

// get a single value - zero based
val = numbers[3];
val = numbers[0];

// insert
// numbers[2] = 100;  // arrays are mutable
val = numbers.indexOf(36);

/* mutating arrays with methods */

// numbers.push(250);  // add onto end of array
// numbers.unshift(120); // add onto front

// numbers.pop()  // no param: removes and returns the value it pops
// numbers.shift();  // no param: removes val from front

// splice values
// numbers.splice(1, 3);

// reverse
// numbers.reverse();

// concat arrays

val = numbers.concat(numbers2);

// sort

// val = fruit.sort();
// val = numbers.sort();

// Use compare function with sorting

// val = numbers.sort(function(x, y){
//     return x - y;  // or y - x to sort in opposite direction
// });

function over50(num) {
    return num > 50;
}

val = numbers.find(over50); 


console.log(numbers);
console.log(val);