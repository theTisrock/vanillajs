/* 
PRIMITIVE 
*/

// String 
const name = 'John Doe';
console.log(typeof name);

// number
const age = 5;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// null
const car = null;
console.log(typeof car); /* returns type 'object'; this is a bug in Javascript */

// undefined
let test;
console.log(typeof test);

// symbol
const sym = Symbol();
console.log(typeof sym);


/* 
REFERENCE - all objects
*/

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address);

// Date

const today = new Date();