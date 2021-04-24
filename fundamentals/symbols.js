/* Symbols */
/* const sym1 = Symbol();
const sym2 = Symbol('sym2');


console.log(sym1);
console.log(sym2);
console.log(typeof sym1);

// no two symbols will evaluate to be the same, even if they are identical
console.log(Symbol() === Symbol());
console.log(`Hello ${String(sym1)}`);
*/

// Can be used for unique object keys
const KEY1 = Symbol('sym1');
const KEY2 = Symbol('sym2');

const myObject = {};

// myObject.KEY1 = 'something';  // does not work. To use a variable as a key, you must wrap it in brackets

myObject[KEY1] = 'Prop1';
myObject[KEY2] = 'Prop2';

console.log(myObject);

/* when using Symbols for keys in an object, they are not enumerable in a "for in" loop */

myObject.key3 = 'Prop3';
myObject.key4 = 'Prop4';

for (let i in myObject) {
    console.log(i);  // only key3 and key4 are printed
}

console.log(Object.keys(myObject));  // neither do they get returned here
console.log(myObject);


// Symbols are ignored by JSON.stringify()

console.log(JSON.stringify({ key1: 'val1' }));
console.log(JSON.stringify( { [Symbol()]: 'val1' }));

