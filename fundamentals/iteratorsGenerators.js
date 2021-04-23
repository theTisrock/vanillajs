/* Iterators and Generators */


// Iterator
function nameIterator(names) {
    let nextIndex = 0;  // value is captured in a closure below (I think)

    return {
        next: function() {
            return nextIndex < names.length ? 
            { value: names[nextIndex++], done: false } : { done: true };
        }
    }
}


const namesArray = ['Chris', 'Mike', 'Ryan'];
const names = nameIterator(namesArray);  // closure

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);  // undefined


// Generator - asterisk designates a function as a generator
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const names_ = sayNames();

console.log(names_.next().value);
console.log(names_.next().value);
console.log(names_.next().value);
console.log(names_.next().value);


function* createIds() {
    let index = 0;

    while (true) {
        yield index;
        index++;
    }
}

const ids = createIds();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
