const firstName = 'William';
const lastName = 'Johnson';
const age = 31;
const str = 'hello there my name is Brad';
const tags = 'web design,web development';

let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

// appending
val = 'Brad ';
// val = 'Traversy' // overwrite
val += 'Traversy';  // append

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// escaping
val = 'That\'s awesome I can\'t wait';

// length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

/* 
Question:
    Which is faster .concat() or the + operator?
Answer:
    The + operator is faster by a large margin. It works with primitive types directly instead of
    going through the API.

https://jsperf.com/string-object-vs-primitive/2

*/

// Change case

val = firstName.toUpperCase();
val = lastName.toLowerCase();


// String char indexing
val = firstName[0];

val = firstName.charAt(0); // returns same as above

/* charAt() vs String[index]
    It seems they are only really different from a readability standpoint. bracket index notation
    is used with arrays also. charAt() is only used for Strings, so it's a bit more clear that the object 
    you're working with is a string when calling it. Where as [] notation could be any iterable.

    In summary, it all depends on the needs of your design.

    using bracket notation for instance is more flexible for abstraction. using charAt() is 'locked in' and
    very specific.
*/

// indexOf(char)
/* if character is not present, -1 is returned */
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');


// get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);  // 3 rear characters substring

val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('Brad', 'Jack'); // generates new string
val = str;

// includes()
val = str.includes('hello');  // like contains()

console.log(val);