const http = new easyHTTP;

// const posts = http.get('http://jsonplaceholder.typicode.com/posts');

// console.log(posts);  // returns undefined, the async response has not been handled


function responseHandler(error, response, status, method) {
    const responseOk = status >= 200 && status < 299;
    console.log(`${method}, ${status}`);
    responseOk ? console.log(response) : console.log(error);
}



// READ
// get resources
http.get('http://jsonplaceholder.typicode.com/posts', responseHandler);
http.get('http://jsonplaceholder.typicode.com/posts/1', responseHandler)


// WRITE
const myData = {
    title: "my title",
    body: "my body",
    userId: 1,
}

// create a resource
http.post('http://jsonplaceholder.typicode.com/posts', myData, responseHandler);


// replace a resource
http.put('http://jsonplaceholder.typicode.com/posts/1', myData, responseHandler);


// DELETE
// remove a resource
http.delete('http://jsonplaceholder.typicode.com/posts/1', responseHandler);
