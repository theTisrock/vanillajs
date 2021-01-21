let val;

// object literal
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'florida'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    },
}
val = person;

// Get a specific value
val = person.firstName;
val = person['lastName'];
val = person.age;

val = person.getBirthYear();
val = person.hobbies;
val = person.address;
val = person.address.state;
val = person.address.city;
val = person.getBirthYear();

const chris = {
    firstName: 'Chris',
    lastName: 'Torok    ',
    age: 31,
    birthday: 15,
    birthMonth: 'December',
    email: 'torok.chris@gmail.com',
    hobbies: ['music', 'sports', 'mr2'],
    address: {
        city: 'Charlotte',
        state: 'North Carolina'
    },
    getCalendarBirthYear: function(){
        return 2020 - this.age;
    },
}

console.log(val);