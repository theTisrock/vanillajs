/* WINDOW METHODS, OBJECT, & PROPERTIES */

/* The context we are working within is called the 'window' object. 
It is just usually unused because it is implied. For example: */

// CONSOLE
// window.console.log(123); // this is shortened to...
// console.log(123);

// // ALERT
// window.alert('Hello World');  // this is shortened to...
// alert('Hello World');

// // PROMPT

// let input = prompt();
// alert(input);

// // CONFIRM

// if (window.confirm('Are you sure?')) {
//     window.console.log('YES');
// } else {
//     window.console.log('No');
// }

/* A lot the above methods are not used (alert, confirm, etc). Think of them
as "90's" style */


// PROPERTIES

let val;

// outer height and width

val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

/* scroll was not working in Chrome as expected */
val = window.scrollY;
val = window.scrollX;

// LOCATION object

let myLocation = window.location;

val = `pathname: ${myLocation.pathname},
\nport: ${myLocation.port}
\nhost: ${myLocation.host}\n
hostname: ${myLocation.hostname}\n
search: ${myLocation.search}` // shows query string

// REDIRECT
// window.location.href = 'http://www.google.com';

// window.location.reload();

// HISTORY object

// window.history.go(-1);

val = window.history.length;

// NAVIGATOR object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

window.console.log(val);