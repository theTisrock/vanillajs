console.log("Hello from app.js!");

/* 
I think the correct approach here would be to send the data to the app. Then the app will take care of updating all content which uses that data.
That way the app is managing the data instead of ui components having to send data directly, which could get messy and become very un-DRY.
 */


const settings = {
    binding: 2,  // 1 for one way binding, 2 for two way binding, 0 for no binding
};


const leftGroup = document.querySelector('#left-group');
const rightGroup = document.querySelector('#right-group');


const app = {
    data: {  // state
        keyX: null,
    },
    methods: {
        set: function(key, value) {
            app.data[key] = value;
            // updateUI();
        },
        get: function(key) {
            return app.data[key];
        },
    },
    show: {
        updateByClass: function() {
            console.log("update components called.")
        },
    },
};


// communicate FROM app to UI
// function updateUI() {
//     const components = document.querySelectorAll('.valueA');
//     components.forEach(function(element) {
//         element.textContent = app.data.valueA;
//         element.value = app.data.valueA;
//     });
// }


/* Communication Layer */
// talk: ui to application
function sendToAppData(app, fieldKey, value) {
    app.methods.set(fieldKey, value);
}

// talk: application to ui
function sendToUI() {
    
}


// Events
function leftEvent(event) {
    // capture the data
    const element = leftGroup.querySelector('#left');
    const value = element.value;
    const key = element.dataset.key;
    // send it back to the application
    sendToAppData(app, key, value);
}


function rightEvent(event) {
    // capture the data
    const element = rightGroup.querySelector('#right');
    const value = element.value;
    const key = element.dataset.key;
    
    // send it back to the application
    sendToAppData(app, key, value);
}


function loadEventListeners() {
    leftGroup.addEventListener('keyup', leftEvent);
    rightGroup.addEventListener('keyup', rightEvent);
}


// initialize
loadEventListeners();

