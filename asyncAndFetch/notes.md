Introduction

Asynchronous JavaScript & Fetching

Synchronous Code:
    - code is executed in a linear sequence
    - operations that take a long time must complete before subsequent lines can be executed. This is called blocking code because it is blocking a
    subsequent operation from being executed.

    <code>
    posts = loadPosts();
    // wait until posts are fetched
    // do something with posts

    doTheNextThing(); // has to wait until posts load
    </code>

At times, it is not necessary to wait upon an operation to complete before moving to another operation.
Think about a friend who said they will call you back soon. You don't know when they will call.

    Synchronous:
    - If you wait by the phone and put off your other responsibilities, this is a blocking behavior.
    Asynchronous:
    - If you decide to do your laundry, go on a run, and eat a good meal, this is a non-blocking behavior.

Asynchronous Code:
    - the interpreter does not wait for the current line of code to complete execution. It moves on to subsequent lines while it is waiting.

    <code>
    loadPostsAsync(function() {
        // wait until posts are finished
        // do something with the posts
    });

    doTheNextThing(); // Does not have to wait until posts are loaded
    </code>


A few ways to work with Asynchronous code:

- Callbacks
- Promises
- Async/await

What is Ajax?

- Asynchrounouse JavaScript & XML: JSON is more often used over XML for Ajax, 
- Allows us to fetch new data without reloading the entire page
- can be used to request data via a Web API

Old way: Client ---- common request & response -------> Server; server gives all content client reloads the entire page
New way: Client ---- javascript call ---------> Ajax Engine ----- xml http request ------> Server; server gives only the JSON content required and a reload is no longer required.

HTTP request JS libraries:

    - Fetch API: core built-in
    - Axios
    - Superagent
    - jQuery: usually overkill because it includes DOM manipulation
    - Node HTTP
