/* protoype inheritance */


// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// store the the method in the prototype for Person
Person.prototype.greeting = function() {
    return `hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("Chris", "Torok");
console.log(person1.greeting());

// Customer constructor to inherit Person
function Customer(firstName, lastName, phoneNumber, membership) {
    // properties of person
    Person.call(this, firstName, lastName);  // sort of like super() in Python

    // properties of customer
    this.phone = phoneNumber;
    this.membership = membership;
}

// we need to explicitly inherit, or extend, the prototype methods from Person
Customer.prototype = Object.create(Person.prototype);

// make the Customer.prototype return Customer() -> this is weird
Customer.prototype.constructor = Customer;

// Customer greeting method overrides person greeting
Customer.prototype.greeting = function () {
    return `hello there ${this.firstName} ${this.lastName}, welcome to the company`;
}



// instantiate a customer: should receive the greeting method and the firstName and lastName of Person
const customer1 = new Customer('Chris', 'Torok', '555-555-5555', 'standard');
console.log(customer1);

console.log(customer1.greeting());

/* process for inheriting:
        create your constructors. then:
        1) use the Parent.call() method to invoke the parent constructor
        2) extend the parent class: ChildClass.protoype = Object.create(Parent.prototype);
        3) ChildClass.prototype.constructor must be set: ThisClass.prototype.constructor = ThisClass;
        4) set behaviors as necessary
*/

// practice


function Animal(name, className) {
    this.name = name;
    this.className = className;
    this.sound = "no sound";
}

Animal.prototype.makeSound = function() {
    return this.sound;
}

// test it out
const animal1 = new Animal("jack", "animal");
console.log(animal1);
console.log(animal1.makeSound());

function Cat(name, className) {
    Animal.call(this, name, className); // call parent constructor, be sure to pass "this"
    this.sound = "meow";
}
Cat.prototype = Object.create(Animal.prototype);  // extend
Cat.prototype.constructor = Cat;  // set constructor in prototype heirarchy

// let's see if it works
cat1 = new Cat("tippy", "feline");
console.log(cat1);
console.log(cat1.makeSound());  // this fell back to the Animal makeSound, but still used this objects "meow"

function Dog(name, className) {
    Animal.call(this, name, className);  // call parent constructor
    this.sound = "bark";
}
Dog.prototype = Object.create(Animal.prototype); // extend
Dog.prototype.constructor = Dog;  // set constructor

const dog = new Dog("bear", "canine");
console.log(dog);
console.log(dog.makeSound());