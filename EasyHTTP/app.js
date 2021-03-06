const http = new easyHTTP;

// const posts = http.get('http://jsonplaceholder.typicode.com/posts');

// console.log(posts);  // returns undefined, the async response has not been handled


function handler(response) {
    console.log(response);
}

http.get('http://jsonplaceholder.typicode.com/posts', handler);