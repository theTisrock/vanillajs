/* 
Chuck Norris Jokes from an external API 

TODOS:
    1) see if the API still works after all these years: done!
    2) since the API feeds data, we don't really have to worry about state
    HOWEVER, to make the app more resourceful, I could record jokes within a certain range and check
    whether or not they exist in the app state and prevent querying the API.
    3) Persist jokes in local storage
*/

// ui
const getJokesBtn = document.querySelector('#get-jokes');
const jokeForm = document.querySelector('#joke-form');
const userInput = jokeForm.querySelector('#number');
const output = document.querySelector('#output');

// mock data
class MockAPI {
    static as_json = '{ "type": "success", "value": [ { "id": 1, "joke": "Joke 1" }, { "id": 5, "joke": "Joke 5" }, { "id": 9, "joke": "Joke 9" } ] }';

    static getJokes() {
        return MockAPI.as_json;
    }
}

// UI interface
class UI {
    static removeJokes() {
        const lis = output.querySelectorAll('li');

        lis.forEach(function(joke) {
            joke.remove();
        });
    }

    static displayJokes(jokes) {
        let myOutput = "";

        jokes.forEach(function(joke) {
            myOutput += `<li>${joke.joke}</li>`;
        });

        output.innerHTML = myOutput;
    }
}



const app = {
    source: null,
    data: {
        jokes: null,
    },
    methods: {
        fetchJokes: function(endpoint="") {
            let joke;
            // prepare an XHR object to query the API
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `${app.source}/${endpoint}`, true);
            xhr.onload = function() {
                const responseOk = this.status >= 200 && this.status <= 299;
                
                if (responseOk) {
                    console.log(this.responseText);
                    let response = JSON.parse(this.responseText);
                    const success = response.type;

                    if (success) {
                        UI.removeJokes();
                        app.data.jokes = response.value;
                        UI.displayJokes(app.data.jokes);
                    } else {
                        console.log("A problem occurred while fetching data.");
                    }

                    app.data.joke = joke;
                } else {
                    console.warn("There was a problem fetching the jokes.")
                    app.data.joke = null;
                }
            }
            
            // call api for jokes
            xhr.send();
        },
    },
    init: function(baseURL) {
        app.source = baseURL;
    },
}

app.init("https://api.icndb.com/jokes")