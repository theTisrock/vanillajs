/* ES 6 Classes */

// all modern browsers support classes

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}!`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person("Mary", "Williams", "11-13-1980");
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge())
console.log(mary.getMarried("Smith"));
console.log(mary);
// console.log(mary.addNumbers(3, 4));
console.log(Person.addNumbers(3, 4));