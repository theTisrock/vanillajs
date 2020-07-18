// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     window.console.log('Function Scope: ', a, b, c);
// }

// test();

// Block Scope - anything wrapped in curly brances {}

// if (true) {
//     // block scope
//     var a = 4;  // applies to global scope
//     let b = 5;  // block
//     const c = 6;  // block
//     window.console.log('Block Scope: ', a, b, c);
// }

for (let a=0; a<10; a++) {
    console.log(`loop: ${a}`);
}

// for (var a=0; a<10; a++) { // 'var' here changes global 'a' to 10 at the end. this is bad.
//     console.log(`loop: ${a}`);
// }

window.console.log('Global Scope: ', a, b, c);