// Main driver for web application


// external resources
const githubClient = new Github;
const ui = new UI;


// events & listeners ONLY - 
// do not manipulate the DOM directly here; only use this area for events
// app data & UI code should respond to profile search events (keyup)
const searchUserInput = document.querySelector('#searchUser');


function searchProfiles(event) {
    console.log("searchProfiles was triggered");
}

function loadEventListeners() {
    searchUserInput.addEventListener('keyup', searchProfiles);
}


// initialize
loadEventListeners();
