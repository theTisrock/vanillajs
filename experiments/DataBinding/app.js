console.log("Hello World!");

/* 
I think the correct approach here would be to send the data to the app. Then the app will take care of updating all content which uses that data.
That way the app is managing the data instead of ui components having to send data directly, which could get messy and become very un-DRY.
 */


const settings = {
    binding: 2,  // 1 for one way binding, 2 for two way binding, 0 for no binding
};


const leftGroup = document.querySelector('#left-group');
const rightGroup = document.querySelector('#right-group');

console.log(leftGroup);
console.log(rightGroup);


const app = {
    data: {
        value: null,
    },
    methods: {
        get: function(name) {
            return app.data[name];
        },
        set: function(name, value) {
            app.data[name] = value;
        },
    },
    show: {
        updateComponents: function() {
            console.log("update components called.")
        },
    },
};


// Events
function leftEvent(event) {

}


function rightEvent(event) {

}


function loadEventListeners() {
    leftGroup.addEventListener('click', leftEvent);
    rightGroup.addEventListener('click', rightEvent);
}


// initialize
loadEventListeners();

