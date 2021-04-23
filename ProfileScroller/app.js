/* Profile Scroller */

const data = [  // mock data
    {
        name:  "Nikkita Smith",
        age: 26,
        gender: "female",
        lookingFor: "male",
        location: "Atlanta GA",
        image: "https://randomuser.me/api/portraits/women/93.jpg",
    },
    {
        name: "Chris Smith",
        age: 32,
        gender: "male",
        lookingFor: "female",
        location: "Greenville SC",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
    },
    {
        name: "Karen Smith",
        age: 35,
        gender: "female",
        lookingFor: "male",
        location: "Charlotte NC",
        image: "https://randomuser.me/api/portraits/women/92.jpg",
    },
];


// components
const imgDisplay = document.getElementById('imageDisplay');
const profileDisplay = document.getElementById('profileDisplay');
const nextProfile = document.getElementById('next');


function getProfiles(data) {  // iterator
    let index = 0;

    return {
        next: function() {
            return index < data.length ? { value: data[index++], done: false } : { done: true };
        }
    }
}

const profiles = getProfiles(data);


// event listeners
function nextProfileEvent(event) {
    // placing the initialization of a generator or iterator in an event listener will produce a brand new
    // generator/iterator every time, which effectively prevents "next()" from working.
    console.log(profiles.next().value);
}


function loadEventListeners() {
    nextProfile.addEventListener('click', nextProfileEvent);
}


// init
loadEventListeners();
