console.log("Hello prototypes.js");

/* 
    basic JavaScript prototype lecture and examples

    What is the benefit of using prototypes in JavaScript vs simply defining the function inside the constructor of an object?

    Observations:
        prototypes can be used as organizational structure
        prototypes seem to "pass down" their methods/functions
 */

// Object.prototype

// Person.prototype

//Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}


// move calculate age to prototype instead
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
}

// gets married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '12-15-1988');
const mary = new Person('Mary', 'Jane', '11-24-1999');

console.log(mary.calculateAge());
console.log(john.calculateAge());

console.log(mary);
mary.getsMarried('Smith');
console.log(mary);