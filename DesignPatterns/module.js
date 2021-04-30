/* Basic Structure of the Module Pattern */
/*
(function() {
    // Declare private vars and functions here

    return {
        // Declare public vars and functinos here
    }
})(); 
*/

/* const UICtl = (function() {
    // private
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    const setText = function(someText) {
        text = someText;
    }

    const getText = function() {
        return text;
    }

    return {
        // public
        callChangeText: function() {
            changeText();
        },
        callSetText: function(someText) {
            setText(someText);
        },
        callGetText: function() {
            return getText();
        }
    }
})();

UICtl.callSetText('Set the text value to this');
// UICtl.callChangeText();


setTimeout(function() {
    UICtl.callChangeText();
}, 5000);
*/


// REVEALING MODULE PATTERN

const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get,
    }
})();

ItemCtrl.add({ id: 1, name: 'chris' });
ItemCtrl.add({ id: 2, name: 'tom'});

console.log(ItemCtrl.get(1));

/* 
The key features of the Module Pattern in JavaScript: 

    - a closure scope allows for hiding private data and methods (encapsulation). Side note: this pattern may be feasible in Python as well.
    - this seems like the closest that JavaScript can get to other languages with access modifiers, like Java & C++
    - feels A LOT like a class

    - Can it return instances? It seems after some research that the idea of the module pattern is to be used like a singleton. 

*/

// Experiment

// https://softwareengineering.stackexchange.com/questions/309361/is-module-pattern-in-javascript-is-useful-only-for-singleton-creation

const Vehicle = (function() { // private
    let speed = 0;
    const speedLimiter = 50;

    const accelerate = function() {
        speed = speed + 5;
    }

    return { // public
        callAccelerate: function() {
            accelerate();
        },
        race: function() {
            while (speed < speedLimiter) {
                accelerate();
                console.log(speed); 
            }
        }
    }
})();

Vehicle.callAccelerate();
Vehicle.race();
