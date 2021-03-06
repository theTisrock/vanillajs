const http = new easyHTTP;

// const posts = http.get('http://jsonplaceholder.typicode.com/posts');

// console.log(posts);  // returns undefined, the async response has not been handled


function responseHandler(error, response, status) {
    const responseOk = status >= 200 && status < 299;
    responseOk ? console.log(response) : console.log(error);
}

http.get('http://jsonplaceholder.typicode.com/posts', responseHandler);
