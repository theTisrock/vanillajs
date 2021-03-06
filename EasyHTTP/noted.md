Fake REST API: http://jsonplaceholder.typicode.com/

app.js: driver code
easyhttp.js: library
index.html: content

app.js depends on easyhttp.js. So easyhttp.js is a dependency and, therefore, must be imported first so that app.js has access to the depedency.

index.html...
    # <script src="easyhttp.js"></script>
    # <script src="app.js"></script>

