/* 
Maps:

key value pairs that can use ANY value as a key or value.

But what about mutable types for keys? Isn't that a bad idea? Once the key is mutatated, you've lost that key!

How are these different from objects? Why would I prefer using a Map over an Object literal? 
From a practical standpoint, they both appear to have the same function. 

A Map might be a good choice if we're working with Symbols as keys in an object literal, because those keys are not used for enumeration and iteration.
*/

const map1 = new Map();

// keys
const key1 = 'some string',
        key2 = {},
        key3 = function() {};

// set values
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

console.log(map1);  // this shows the underlying array indexes


const val1 = map1.get(key1);
const val2 = map1.get(key2);
const val3 = map1.get(key3);
console.log(val1, val2, val3);

// count elements in map
console.log(`map size: ${map1.size}`);


// Iterating Maps
console.log("\nIterating through the map");
for (let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

console.log('\nKeys only...')
for (let key of map1.keys()) {
    console.log(key);
}

console.log('\nValues only...')
for (let value of map1.values()) {
    console.log(value);
}

console.log('\nFor each...');
map1.forEach(function(value, key) {
    console.log(key, value);
});


// CONVERT MAP TO AN ARRAY
console.log("\nConvert map to an array:")

// create an Array of key values
const kvArray = Array.from(map1);
console.log(kvArray);
const valueArray = Array.from(map1.values());
console.log(valueArray);

// experiment: use Symbols as keys? It works! 
const symbolMap = new Map();
const k1 = Symbol('k1');
const k2 = Symbol('k2');
const k3 = Symbol('k3');

symbolMap.set(k1, 'v1');
symbolMap.set(k2, 'v2');
symbolMap.set(k3, 'v3');

// use Symbols as keys to fetch values
const v1 = symbolMap.get(k1);
const v2 = symbolMap.get(k2);
const v3 = symbolMap.get(k3);

console.log('\n', v1, v2, v3);

// test experiment
for (let [k, v] of symbolMap) {
    console.log(`${k.toString()} = ${v}`);  // Symbols are not coerced to Strings and must be explicitly converted.
}

// test keys only
for (let key of symbolMap.keys()) {
    console.log(key);
}

