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

The scope must be passed down with an arrow function. This is weird having to manage scope explicitly.