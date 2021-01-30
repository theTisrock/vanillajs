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

        Pure functions don't 'transform' anything! They copy the input structure, if necessary. But they never transform.

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

- Clear All Tasks
    - get the collection of tasks
    - loop through and remove them 1 at a time.

- Delete A Task
    - triggered by a click event
    - click event calls the deletion procedure, which should be decoupled from the click event into it's own function. What if the event type that triggers the deletion changes? The deletion process should not change at all.

    - used the event delegation procedure from the 'ul' component. It listens for a click at the 'a' tag, which bubbles up to the 'li' tag. 
    
    What if there is some other click event that is implemented on the 'ul' component?
    
    approaches:
        - attach an event listener to each 'a' tag upon adding them and listen for the event at the 'li' (parent) level to call the remove() method. The bad thing with this is the event listener is not lumped in with the loadEventListeners() function. It's bad from a code organization standpoint.
        
        - use the "event.target" and attach a listener on the 'ul' list that houses the tasks. This allows us to register 1 event listener, instead of 1 for each task.

        How does adding too many event listeners affect performance? I would think that only adding one is better than adding many and would be more taxing on the processor.

        https://stackoverflow.com/questions/28627606/does-adding-too-many-event-listeners-affect-performance

        based on the above link, event listening and delegation is handled the most efficiently at the parent element, so this is generally how it should be done.

- Filter Displayed List by when typing

    - triggered by keyup event listener
    - when the value is not empty if a list item's text contains the substring of value, display that list item, else hide it.
