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
        - submit events are only fired when a form is submitted. If there's no form, there's no submit event.
        - parseInt() vs Number(): https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number
            - parseInt() will extract (or parse) an int from a string, you can also provide a number base
                examples:   parseInt("100", 2) -> 4 
                            parseInt("100") -> 100 
                            parseInt("100x") -> 100
                            parseInt("10", 16) -> 16
*/

const settings = {  // stuff that should not change when the app is running
    upperBound: 10,
    lowerBound: 1,
    maxGuessCount: 5,
};

const app = {
    data: {  // the variables to use for internal app logic
        guessCount: 0,
        winningNumber: Math.floor(Math.random() * settings.upperBound),
    },
    // methods - functions that modify that app data
    methods: {
        incrementGuessCount: function() {
            app.data.guessCount += 1;
        },
        setSecretNumber: function() {
            app.data.winningNumber = Math.floor(Math.random() * settings.upperBound);
        },
    }, 
    func: {
        guessAttempt: function(guess, lowerBound, upperBound) {
            let result = false;
            const target = app.data.winningNumber;
        
            if (guess >= lowerBound && guess <= upperBound)
                result = guess === target;
        
            return result;
        },
    },
    init: function() {
        app.methods.setSecretNumber();
    },
};


const game = document.querySelector("#game");
const userInstructions = document.querySelector('#user-instructions');
userInstructions.querySelector('.min-num').textContent = settings.lowerBound;
userInstructions.querySelector('.max-num').textContent = settings.upperBound;


function playGameEvent(event) {  // main driver
    const message = game.querySelector('.message');
    const guessesLeft = settings.maxGuessCount - app.data.guessCount;

    if (app.data.guessCount < settings.maxGuessCount) {
        if (event.target.id === "guess-submit") {
            const guessInput = game.querySelector('#guess-input');
            // const guess = Number(guessInput.value);
            const guess = parseInt(guessInput.value);
            const outcome = app.func.guessAttempt(guess, settings.lowerBound, settings.upperBound);
            message.textContent = (outcome) ? "win" : "lose";
        }

        app.methods.incrementGuessCount(1);
    } 
    else
        message.textContent = `${guessesLeft} guesses left.`;
}


// register events
function loadEventListeners() {
    game.addEventListener("click", playGameEvent);
}


// initialize
loadEventListeners();
app.init();
