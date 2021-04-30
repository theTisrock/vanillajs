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

