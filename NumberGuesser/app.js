/* Number Guesser

    todo's - A number guesser needs:

    happy path:
        - An upper bound and lower bound
        - see if the input number matches the randomly generated number

        - we could generate the random number on click or pregenerate it and have it ready
            - updateTemplate(data)

    sad path:
        - validate that inputs are numbers only and not strings

    Other stuff: UI components to work with
        - submit button
        - text box input
        - output via alert()

        - templated placeholders for data (upper & lower bounds)

    Behavior:

        playGameEvent():
        - Game div will listen for a submit event
        - The user input value will be read in
        - the user input will be validated


        playGame():
        - the user input will be checked against the random value
        - the user will be notified of the outcome (win/loss)

    Learned:
        -submit events are only fired when a form is submitted. If there's no form, there's no submit event.
*/

const app = {
    settings: {  // stuff that should not change when the app is running
        upperBound: 10,
        lowerBound: 1,
        maxGuessCount: 5,
    },
    data: {  // the variables to use for internal app logic
        guessCount: 0,
        secretNumber: Math.floor(Math.random() * 10),
    },
    // methods - functions that modify that app data
    methods: {
        incrementGuessCount: function() {
            app.data.guessCount += 1;
        },
        setSecretNumber: function() {
            app.data.secretNumber = Math.floor(Math.random() * 10);
        },
    }, 
    func: {
        guessAttempt: function(guess, lowerBound, upperBound) {
            let result = false;
            const target = app.data.secretNumber;
        
            if (guess >= lowerBound && guess <= upperBound)
                result = guess === target;
        
            return result;
        },
    },
};


const game = document.querySelector("#game");
const userInstructions = document.querySelector('#user-instructions');
userInstructions.querySelector('.min-num').textContent = app.settings.lowerBound;
userInstructions.querySelector('.max-num').textContent = app.settings.upperBound;


function playGameEvent(event) {  // main driver
    const message = game.querySelector('.message');

    if (app.data.guessCount < app.settings.maxGuessCount) {
        if (event.target.id === "guess-submit") {
            const guessInput = game.querySelector('#guess-input');
            const guess = Number(guessInput.value);
            const outcome = app.func.guessAttempt(guess, app.settings.lowerBound, app.settings.upperBound);
            message.textContent = (outcome) ? "win" : "lose";
        }

        app.methods.incrementGuessCount(1);
    } 
    else
        message.textContent = "No attempts remaining";
}


// register events
function loadEventListeners() {
    game.addEventListener("click", playGameEvent);
}


// initialize
loadEventListeners();
