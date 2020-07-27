/* DOM properties */

let val;


/* 
    html collection is not an array, but is an array-like object.

    the indexed collection of the entire html document!
*/

val = window.document.all;  

val = document.all[0];  // html tag
val = document.all[1]; // head tag
val = document.all[2];  // meta
val = document.all[5];  // link tag
val = document.all[7];  // title
val = document.all[8];  // body
val = document.all.length; // counts the node tags in the document
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = window.document.scripts[2].getAttribute('src');

/* Transform HTMLCollection to Array */

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script);
});

console.log(val);