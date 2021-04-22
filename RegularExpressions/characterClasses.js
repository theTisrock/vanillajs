/* Short hand Character classes */

let re;

re = /\w/;  // word character: alphanumeric or _ - letters, numbers, or underscore
re = /\w+/; // one or more
re = /W/;  // non-word characters
re = /\d/;  // digit
re = /\d+/;  // digits
re = /\D/;  // non-digit
re = /\s/;  // whitespace
re = /Hell\b/i;  // word boundary - find a whole word instead of substrings

// Assertions
re = /x(?=y)/;
re = /c(?=hris)/;
re = /c(?!hris)/;



let str = '3x3x3x';
str = '()';
str = '999';
str = '@';
str = '0123';
str = ' ';
str = 'Hello, welcome to Hell!';
str = 'abcxyz';
str = 'chris';





// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {

    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
        return;
    }

    console.log(`${str} does NOT match ${re.source}`);
}

reTest(re, str);
