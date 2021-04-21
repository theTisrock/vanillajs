/* Character Sets - Brackets */

let re = /gra?e?y/i;  // question marks get long when we have lots of optional characters. They also aren't very human-readable.
// we can use a character set instead - []
re = /gr[ae]y/i;

// we can also exclude by adding a carrot
re = /gr[^ae]y/i;  // now everything except a and e will match; 
re = /[A-Z]ray/;  // char range of uppercase letters
re = /[a-z]ray/;  // char range of lowercase letters
re = /[a-zA-Z]ray/;  // match any case
re = /[0-9]ray/;  // number range

re = /[0-9A-Za-z]ray/;  // combine all letter and numbers experiment

let str = 'iray';

// Quantifiers - {} 
re = /Hel{2}o/;  // exactly 2 occurances of l
re = /Hel{2,10}o/;  // from 2 to 10 l's. 
re = /Hel{2,}o/;  // at least 2 l's.
// re = /Hel{,10}o/;  // up to 10 l's. THIS DIDN'T WORK


// Grouping - Parenthesis ()
re = /([0-9]{3})/;
re = /([0-9]x){5}/;

str = '1x2x3x4x5x';




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
