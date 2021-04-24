/* Destructuring Assignment */

let a, b;

// Array destructuring
[a, b] = [111, 222];
console.log(a, b);

// Rest pattern for destructuring
[a, b, c, ...rest] = [978, 723, 444, 123, 321, 456, 567];

console.log(`a: ${a}, type: ${typeof a}`);
console.log(`b: ${b}, type: ${typeof b}`);
console.log(`c: ${c}, type: ${typeof c}`);
console.log(`rest: ${rest}, type: ${typeof rest}, isArray? ${Array.isArray(rest)}`); // feels similar to 'unpacking' in Python

const people = ['John', 'Bill', 'Sue'];
console.log(people);
const [p1, p2, p3] = people;
console.log(p1, p2, p3);


({a, b} = { a: 'some text', b: 'I am b', c: 'I am not c', d: 'hello world', e: 'people suck'});
({a, b, c, ...rest} = { a: 'some text', b: 'I am b', c: 'I am not c', d: 'hello world', e: 'people suck'});

// Object destructuring
console.log('Object destructuring');
console.log(`a: ${a}, type: ${typeof a}`);
console.log(`b: ${b}, type: ${typeof b}`);
console.log(`c: ${c}, type: ${typeof c}`);
console.log(`rest: ${rest}, type: ${typeof rest}, isArray? ${Array.isArray(rest)}`); // feels similar to 'unpacking' in Python



function getPeople() {
    return ['p1', 'p2', 'p3'];
}

const [x, y, z] = getPeople();

console.log(x, y, z);


/* Object Destructuring */

const person = {
    name: 'John Doe',
    age: 32, 
    city: 'Miami',
    gender: 'male',
};

// Old ES5 unpacking
const name = person.name,
        age = person.age,
        city = person.city;

// ES6 unpacking
const { name, age, city } = person;
