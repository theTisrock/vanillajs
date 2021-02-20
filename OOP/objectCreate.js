/* An alternative way to create a prototyped object ad-hoc */

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastname) {
        this.lastName = newLastname;
    },
}


const mary = Object.create(personPrototypes);  // stubbed object
mary.firstName = "Mary";
mary.lastName = "Thompson";
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.getsMarried("Smith");
console.log(mary);
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: "Brad"},
    lastName: {value: "Traversy"},
    age: {value: 36},
})

console.log(brad);
console.log(brad.greeting());

/* this is sort of like a manual construction process */

const properties = {
    firstName: {value: "chris"},
    lastName: {value: "torok"},
    age: {value: 32},
    sex: {value: "male"},
}

const chris = Object.create(personPrototypes, properties);

console.log(chris);
console.log(chris.greeting());