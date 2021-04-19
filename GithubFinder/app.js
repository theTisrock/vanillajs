// Main driver for web application


// external resources
const githubClient = new Github();
const ui = new UI;


// events & listeners ONLY - 
// do not manipulate the DOM directly here; only use this area for events
// app data & UI code should respond to profile search events (keyup)

// only use DOM components here for the purpose of registering events
// no DOM manipulation should be done in this module.
const searchUserInput = document.querySelector('#searchUser');


async function searchProfiles(event) {
    let username = event.target.value;

    if (username != '') {
        let response = await githubClient.getProfile(username);

        if (response.info.ok) {
            ui.showProfile(response.profile);
            return;
        }

        ui.showAlert(response.info.status, response.info.statusText, 'alert alert-danger', 3000);
        return;
    }

    ui.showProfile({profile: {}});  // using the data to decide whether or not something should be shown
}


function loadEventListeners() {
    searchUserInput.addEventListener('keyup', searchProfiles);
}


// initialize
loadEventListeners();
