/* Try catch - handle errors without stopping the script */

const user = { email: "joe.blow@email.com" };


// myFunction(); // uncaught

try {
    // myFunction();  // not defined, produces a ReferenceError
    // null.myFunction();  // produces a TypeError
    // eval('hello world'); // SyntaxError. 'hello' and 'world' are variables and not string literals here. 
    // decodeURIComponent('%');  // URIError

    if (!user.name) {
        throw new SyntaxError("user object has no name");  // throw a custom error
    }

} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log('ReferenceError? ', error instanceof ReferenceError);
    console.log('TypeError? ', error instanceof TypeError);
    console.log('SyntaxError? ', error instanceof SyntaxError);
    if (error instanceof SyntaxError) {
        console.log(`User Error: ${error.message}`);
    }
    console.log('URIError? ', error instanceof URIError);
} finally {
    console.log("This will run no matter what!");
    // whereas, either the try or catch blocks will run but not both. This block always runs.
}


console.log("Program continues...");