/* Sets - store a group of unique values of any type */

const set1 = new Set();

set1.add(100);
set1.add('Some String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);  // Already added, so this will be left out of the set

// const set2 = new Set([232, 'birds', { x: 'hello' }, false]);
// console.log(set2);


console.log(set1);
console.log(set1.size);
console.log(set1.has(100));
console.log(set1.has(1 === 1));  // you can use expressions to test if the result already exists

// here's something weird
console.log(set1.has({ name: 'John' })); // this passes in a reference, which is different from line 7

const obj = { name: 'chris' };
const setX = new Set();
setX.add(obj);

console.log(setX.has({ name: 'chris' }));
console.log(setX.has(obj));  // same reference as line 25

// Deleting from a set
set1.delete(true);
console.log(set1);

// Iterate through a set
console.log("\nIterate through a set...");
for (let item of set1) {
    console.log(item);
}
