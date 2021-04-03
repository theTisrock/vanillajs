
// writing the function this way returns the expected value of a string
function sayHello() {
    return 'Hello';
}

console.log(sayHello());

// BUT using 'async' returns a PROMISE!
async function sayHelloWorld() {
    return 'Hello World!';
}

console.log(sayHelloWorld());  // we need to handle with the ".then()" clause

sayHelloWorld()  // THIS WORKS!!!
    .then(res => console.log(res));


// await
async function sayHelloPiggies() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello Piggies'), 5000);
    });

    const res = await promise;
    return res;
}

sayHelloPiggies()
    .then(res => console.log(res));


function otherSyncFunc() {
    return 'I am synchronous';
}

console.log(otherSyncFunc());  // interpreter moves on to this function first while it finishes executing 'sayHelloPiggies'
// so 'I am synchronous' prints out BEFORE 'sayHelloPiggies', even though it starts execution first, instead of waiting around

async function getUsers(url) {
    // await the response of the fetch call
    const response = await fetch(url);

    // only proceed once the above promise is resolved
    const data = await response.json();
    return data;
}

getUsers('https://jsonplaceholder.typicode.com/users')
    .then(users => console.log(users))
    .catch(error => console.log(error));


/* SUMMARY: 
    Async await, aside from it's cooperative multitasking benefits, also allows for using less code when dealing with Promises.
*/