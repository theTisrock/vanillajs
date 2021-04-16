// Main driver for web application


// external resources
const githubClient = new Github;
const ui = new UI;


// events & listeners ONLY - 
// do not manipulate the DOM directly here; only use this area for events
// app data & UI code should respond to profile search events (keyup)

// only use DOM components here for the purpose of registering events
// no DOM manipulation should be done in this module.
const searchUserInput = document.querySelector('#searchUser');


function searchProfiles(event) {
    console.log("searchProfiles was triggered");

    /* PSEUDO CODE BLOCK
    const response = githubClient.getProfile();

    if (!response.ok) {
        ui.showAlert("Profile does not exist.");
        return;
    }

    const data = response.data();
    ui.showProfile(data);
    */
}

function loadEventListeners() {
    searchUserInput.addEventListener('keyup', searchProfiles);
}


// initialize
loadEventListeners();
