/* Fetch API */

// components
const getTextBtn = document.querySelector('#button1');
const getJSONBtn = document.querySelector('#button2');
const getAPIBtn = document.querySelector('#button3');

// console.log(getTextBtn, getJSONBtn, getAPIBtn);

// Get text from file
function fetchData(source, format) {
    const output = document.querySelector('#output');

    fetch(source)  // fetch is promise based
        .then(function(res) {
            if (format === 'text') return res.text();
            if (format === 'json') return res.json();
        })
        .then(function(data) {
            output.innerHTML = `<p>${JSON.stringify(data)}</p>`;
        })
        .catch(function(error) {
            output.innerHTML = `<p>${error}</p>`;
        });
}


// Get API data
function getExternalData(url) {

}


// Event Handlers
function getTextHandler(event) {
    fetchData('test.txt', 'text');
}

function getJSONHandler() {
    fetchData('posts.json', 'json');
}

function getAPIHandler() {
    fetchData('https://api.github.com/users', 'json');
}


// Event Listeners
function loadEventListeners() {
    getTextBtn.addEventListener('click', getTextHandler);
    getJSONBtn.addEventListener('click', getJSONHandler);
    getAPIBtn.addEventListener('click', getAPIHandler);
}

loadEventListeners();
