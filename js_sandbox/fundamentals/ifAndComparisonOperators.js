// if (true) {
//     do something;
// } else {
//     do another thing;
// }

const id = 100;

// // EQUAL TO
// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if (id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if (typeof id !== 'undefined') { // avoids exception
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID')
// }

// GREATER THAN OR LESS THAN
// if (id > 200) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// IF ELSE
// const color = 'yellow';

// if (color === 'red') {
//     console.log(`color is ${color}`);
// } else if (color === 'blue') {
//     console.log(`color is ${color}`);
// } else {
//     console.log('color is not red or blue');
// }

// LOGICAL OPERATORS
const name = 'steve';
const age = 7;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child.`);
} else if (age >= 13 && age < 19) {
    console.log(`${name} is a teenager.`);
} else {
    console.log(`${name} is an adult.`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} cannot run in the race.`);
} else {
    console.log(`${name} is registered for the race.`)
}

// ternary
 console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES

if (id === 100)  // bad practice in JS
    console.log('CORRECT');
else
    console.log('INCORRECT');