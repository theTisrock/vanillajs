
// normal function
// function sayHello() {
//     console.log('Hello');
// }

// const sayHello = function() {
//     console.log('Hello');
// }

// arrow functions can be composed several ways
// const sayHello = () => {
//     console.log("Hello");
// }

// const sayHello = () => console.log("hello");

// one line returns
// const sayHello = () => "Hello";

// console.log(sayHello());

// const sayHello = () => { msg: "hello" };  // object literals in arrow functions return undefined unless wrapped in parens
// const sayHello = () => ({ msg: "hello" });
// console.log(sayHello());


// Parameters and arrow functions
// single param doesn't need parentheses
// const sayHello = name => console.log(`hello ${name}`);
// multiples do
// const sayHello = (fn, ln) => console.log(`hello ${fn} ${ln}`)

// sayHello('chris', 'torok');

const users = ['Nathan', 'Brad', 'Tim'];

// Normal
// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// })

// shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);