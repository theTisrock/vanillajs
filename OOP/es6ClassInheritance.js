/* subclassing */


class Person {
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}!`;
    }

}

const person = new Person("bob", "smith");
console.log(person);

class Customer extends Person {

    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    greeting() {
        return super.greeting() + " Welcome to the club!";
    }

    static getMembershipCost() {
        return 500;
    }
}


const customer = new Customer("peter", "parker", "555-555-5555", "gold");
console.log(customer);
console.log(customer.greeting());
console.log(Customer.getMembershipCost());
// console.log(customer.getMembershipCost());  // cannot call a static method on an instance



