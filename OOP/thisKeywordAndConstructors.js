console.log("hello app.js");

// Constructor
function Person(name, dob) {
    this.name = name;  // "this" keyword refers to the current instance of the object
    this.birthday = new Date(dob);
    console.log(this);

    this.computeAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}

// console.log(this);  // returns the Window object

// object instantiation
// const brad = new Person('brad', 30);
// const john = new Person('john', 18);

// const people = [brad, john];

// people.forEach(function(person) {
//     console.log(person);
// });

const brad = new Person('brad', '9-10-1981');
const age = brad.computeAge();
console.log(age);


/*
    Observations:
    
    Constructors house method definitions, unlike Java, Python, etc. That's weird.
    Essentially, a function operates as a class of sorts. 
*/
