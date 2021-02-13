// String

const name = "Jeff";  // primitive type
const name2 = new String("Jeff");  // object type shows a char map.

name2.foo = "bar";

console.log(name);

/* if we compare 'name' and 'name2', they will not be equal because one is an object, the other is primitive */
// when comparing strings BEWARE! for example:

if (name2 === "Jeff") {  // name2 fails, name1 passes
    console.log("YES");
} else {
    console.log("NO");
}

// so when working with String, you need to ask yourself "Is this a primitive string or an object?"


// Other constructors
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2); // returns object, not number


// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);


// Functions
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(typeof getSum1);

console.log(typeof getSum2);


// Objects

const john1 = {
    name: 'john',
}

console.log(john1);

const john2 = new Object({name: 'john'});

console.log(john2);


// Array

const array1 = [1, 2, 3];

console.log(array1);

const array2 = new Array(1, 2, 3);

console.log(array2);


// Reguler Expressions

const re1 = /\w+/;
console.log(re1);
const re2 = new RegExp('\\w+');
console.log(re2);
