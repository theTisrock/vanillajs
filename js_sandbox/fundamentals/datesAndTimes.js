let val;

const today = new Date();

let birthday = new Date('12-15-1988');  // input formats
birthday = new Date('December 15 1988');
birthday = new Date('12/15/1988');

val = today;
val = birthday;

// Javascript Date api
val = today.getMonth(); // zero based
val = today.getDate(); // not zero-based
val = today.getDay();  // zero based
val = today.getFullYear();  // non zero based
val = today.getHours();  // zero-based (military time)
val = today.getMinutes(); 
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(14);
birthday.setMinutes(55);
birthday.setSeconds(23);

// console.log(typeof val);
// console.log(val);
console.log(birthday);