console.log("hello app.js");

// Constructor
function Person(name, dob) {
    this.name = name;  // "this" keyword refers to the current instance of the object
    this.birthday = new Date(dob);
    // console.log(this);

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
// console.log(age);


/*
    Observations:
    
    Constructors house method definitions, unlike Java, Python, etc. That's weird.
    Essentially, a function operates as a class of sorts. 
*/

// SCRATCH PAD


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
    
    this.applyGasPedal = function(pressure) {
        switch (pressure) {
            case 1: this.speed = this.speed + 1;
                break;
            case 2: this.speed = this.speed + 5;
                break;
            case 3: this.speed = this.speed + 10;
                break;
            case 4: this.speed = 100;
                break;
            default: null;
                break;
        }
    };

    console.log(this);
}


const honda = new Car("honda", "civic", 2005);
const toyota = new Car("toyota", "mr2", 2001);
const chevy = new Car("chevrolet", "corvette", 2010);

// drive the car
console.log(honda.make, honda.speed);
honda.applyGasPedal(4);
console.log(honda.make, honda.speed);