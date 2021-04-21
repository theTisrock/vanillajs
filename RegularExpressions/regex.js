/* 
Regular Expressions

Pattern matching on characters
*/

let re = /hello/;  // search for the FIRST instance of the pattern
let result = re.exec('hello chris, hello tommy, hello jess');
console.log(result);

re = /hello/g;  // search for ALL instances of the pattern
result = re.exec('hello chris, hello tommy, hello jess');
console.log(result);

// console.log(re);  // prints the literal regular expression
// console.log(re.source);  // prints the string value

// exec() - evaluating a string against a regex
// returns the regex, the index where the pattern is found first, and the input string it compared the regex against.
result = re.exec('Chris says hello world hello!');

//  console.log(result);
//  console.log(result[0]);
//  console.log(result.input);
//  console.log(result.index);

result = re.test('Hello');  // false because of uppercase H
result = re.test('hello');  // true

// let's make it case insensitive
re = /hello/i;  // i is case insensitive

result = re.test('HelLo');  // now returns true

console.log(result);

// match() - return result array or null - I like this one because you can get more meaningful info than just true/false, but you can also use truthy and falsey values
let str = 'Hello There world, hello';
result = str.match(re);
console.log('match(): ', result);

str = 'no match here';
result = str.match(re);
console.log('match(): ', result);

// search() - returns index of match or -1
str = 'Chris Hello There';
result = str.search(re);
console.log(result);

str = 'no match here';
result = str.search(re);
console.log(result);


// replace() will return a new string - I like this method
re = /hello/g;  // use 'g' as a directive to replace all instance of the regex
str = 'hello there hello';
newStr = str.replace(re, 'hi');
console.log(newStr);
