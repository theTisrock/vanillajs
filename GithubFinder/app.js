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
        let userResponse = await githubClient.getProfile(username);

        if (userResponse.info.ok) {
            let reposResponse = await githubClient.getRepos(username);
            console.log(reposResponse.repos);
            ui.showProfile(userResponse.profile);
            ui.showRepos(reposResponse.repos);
            return;
        }

        ui.showProfile({ profile: {}});
        ui.showAlert(userResponse.info.status, userResponse.info.statusText, 'alert alert-danger', 3000);
        return;
    }

    ui.showProfile({profile: {}});
}


function loadEventListeners() {
    searchUserInput.addEventListener('keyup', searchProfiles);
}


// initialize
loadEventListeners();
