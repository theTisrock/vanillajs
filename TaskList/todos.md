Create a Task List App!

Boilerplate:
* HTML document with dependencies: 
    1) cdn materialize css
    2) cdn materialize js -> cdn jquery Javascript lib
    2) font awesome


Build the App:
* app.js file (our main js file)
    1) define variables/components that you know you'll need to work with in the DOM.
    2) decide on functions and list them out
    3) centralize eventListener registration

    considerations: make functions as PURE as possible. 
    
    Pure functions 
        A) always give the same output for a given input and 
        B) don't affect things outside of the function
        C) the function only depends on the inputs - the parameters passed in. Dependency injection perhaps?
        D) never change the inputs, that causes side affect. Treat inputs as immutable.
        E) Do not rely on any external state - "stateless"
        D) Possess idempotency!

        The function BY ITSELF should always be returning the same output no matter how many times you give it the same input.

    Why use pure functions?
        You are guaranteed to not have side affects. Probably easier to debug since the tracing would be linear.
        #1 reason: Incredibly easy to TEST!!!! No mocking!!! Simple unit tests!

        REDUCE SIDE AFFECTS


    <code>
        // not pure
        const array = [1, 2, 3];
        function addElementToArray(element) {
            array.push(element);
        }

        // pure
        const array = [1, 2, 3];
        function addElementToArray(array, element) {
            let new_array = array.map(function(el) {  // produces a new array, while leaving array unchanged
                return el;
            });

            new_array.push(element);  // adds the element to it

            return new_array;  // returns it back to the environment
        }
    </code>

    I consider side affects to be like a "hidden agenda" in your code. It seems pure functions favor explicit over implicit. Readability over convenience.

    I'd like to adopt a functional purity in my programming. But can this concept be taken to far? What about time constraints?


Functions:

- Add a task
    - create a list item: define list item attributes, content, and other components
    - appending it to the list