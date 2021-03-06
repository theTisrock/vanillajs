Fake REST API: http://jsonplaceholder.typicode.com/

app.js: driver code
easyhttp.js: library
index.html: content

app.js depends on easyhttp.js. So easyhttp.js is a dependency and, therefore, must be imported first so that app.js has access to the depedency.

index.html...
    # <script src="easyhttp.js"></script>
    # <script src="app.js"></script>

Build out the HTTP GET, PUT, POST, DELETE methods in the prototypes


Lexical scope and arrow functions:

In our easyHttp library, we come across an undefined this.http reference when calling the status attribute in the onload hook. We get this error inside the function, but not outside of it. Why?

The scope must be passed down with an arrow function. Or use <code>let self = this;</code>
Then use self inside the function.
This is weird having to manage scope explicitly.

The point?

WHEN YOU ARE INSIDE A FUNCTION, THE 'this' KEYWORD PERTAINS TO THAT FUNCTION, unless the scope is changed explicitly.

While working on the onload get function, I realized that when building a library, I have a decision to make: 
what does the library code handle? We want to take away complexity and boilerplate as much as possible, while still allowing for extensibility.

I feel that allowing the API user to control what is done with the response is better.

Should they control the XHR object? I think not.

In any case, a library should make the devs life easier. 
