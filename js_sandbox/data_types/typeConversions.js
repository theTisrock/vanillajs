/* notes:
Coercion vs type conversion

coercion is done by Javascript implicitly and it predetermined.
conversion is done explicitly.
Both convert data types from one to another.
*/

let val;

/* CONVERT to String */

// number
val = String(5);
val = String(4+4);
// boolean
val = String(true);
// Date
val = String(new Date());
// Array
val = String([1, 2, 3]);
// toString()
val = (5).toString();
val = (true).toString();

/* CONVERT from String */

val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');  // NaN
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2))

const val1 = String(5);
const val2 = 6;  // 6 was changed to a string implicitly
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

