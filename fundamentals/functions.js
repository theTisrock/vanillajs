/* 
functions can be defined, then called later.
functions can also be defined and immediately run.
*/

/* FUNCTION DECLARATIONS */

function greet(firstName, lastName) { // define
    // console.log('hello');
    return `Hello ${firstName} ${lastName}`;
}

// functions cannot be overloaded in JS like they can in Java
// function greet(firstName) {;
//     return `Hello ${firstName}`;
// }

// OLD WAY OF 'OVERLOADING'
// function greet(firstName, lastName) {
//     if (firstName === 'undefined') { firstName = 'John'}
//     if (lastName === 'undefined') { lastName = 'Doe'}

//     return `${firstName} ${lastName}`;
// }

// NEW WAY OF OVERLOADING (or setting default values) for ES6
function greet(firstName = 'john', lastName = 'doe') { // define
    // console.log('hello');
    return `Hello ${firstName} ${lastName}`;
}


console.log(greet());  // call

/* FUNCTION EXPRESSION */

const square = function(x = 3) {
    return x * x;
};

console.log(square(8));
console.log(square());

/* IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS */

(function(name) {
    console.log(`${name} ran the Iffy function`);
})('chris');  // <- function must be called with "()"

/* methods - function can go inside of objects */
const todo = {
    
    add: function() {
        console.log('Add todo...');
    },

    edit: function(id = 0) {
        console.log(`edit todo ${id}`);
    },
};

/* method can be attached outside the objects definition also */

todo.delete = function() {
    console.log('Deleted!');
};

todo.x = 'hello x';

todo.add(90993939);  /* <-- passed in a parameter and NO ERROR. Bad design. 
If I'm expecting it to do something with that parameter and it doesn't do anything, that's a problem! */
todo.edit(1);
todo.delete();
console.log(todo.x);