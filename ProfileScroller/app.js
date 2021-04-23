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


function profileIterator(data) {
    let index = 0;

    return {
        next: function() {
            return index < data.length ? { value: data[index++], done: false } : { done: true };
        }
    }
}

function* profileGenerator(data) {
    let index = 0;

    while (index < data.length) { 
        yield data[index++]; 
    }
}

const profiles = profileIterator(data);


function showNextProfile(profiles) {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {

        profileDisplay.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">${currentProfile.name}</li>
            <li class="list-group-item">${currentProfile.age}</li>
            <li class="list-group-item">${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
            <li class="list-group-item">${currentProfile.location}</li>
        </ul>
        `;

        imgDisplay.innerHTML = `
        <img src="${currentProfile.image}">
        </img>
        `;
        return;
    }

    window.location.reload();
}


// event listeners
function nextProfileEvent(event) {
    // placing the initialization of a generator or iterator in an event listener will produce a brand new
    // generator/iterator every time, which effectively prevents "next()" from working.
    showNextProfile(profiles);
}


function loadEventListeners() {
    nextProfile.addEventListener('click', nextProfileEvent);
}


// init
loadEventListeners();
