let re;

// literal chars
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;  // ^ means: Must start with
re = /^hell/i;
re = /d$/i;  // $ means: Must end with
re = /world$/i;

re = /^hello$/i;  // start AND end with
re = /^...../i;  // wild card single char
re = /^.....$/i;
re = /...../i;

re = /h*o/; // match any character 0 or more times

re = /gra?e?/i;  // ? mark after a char means it is optional. so a?e? means that either a or e are acceptable for this char. Basically a list of optional chars.

// What if I want to include a question mark literal? I need to escape it. 
re = /gray\?/i;



// String to match
// const str = 'Hello world';

let str = 'gray?';

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
