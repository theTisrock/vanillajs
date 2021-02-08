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

        - I need to focus on the workflow of the app first instead of optimizing first,
            for example, don't worry about generating a random number, but use a placeholder winning number instead
            Use dummy data to insert in the application work flow. Then mark what needs to be optimized.
        
        - settings should be decoupled from the app and not stored inside it. The app is the slave to the settings. The settings should not be slave to the app.
*/

const settings = {  // stuff that should not change when the app is running
    upperBound: 10,
    lowerBound: 1,
    maxGuessCount: 5,
};

const app = {
    data: {  // the variables to use for internal app logic
        guessCount: 0,
        winningNumber: 2, // Math.floor(Math.random() * settings.upperBound),
        gameOver: false,
    },
    // methods - functions that modify that app data
    methods: {
        incrementGuessCount: function() {
            app.data.guessCount += 1;
        },
        setWinningNumber: function() {
            app.data.winningNumber = 2; // Math.floor(Math.random() * settings.upperBound);
        },
        guessesLeft: function() {
            return settings.maxGuessCount - app.data.guessCount;
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
        app.methods.setWinningNumber();
    },
};


const game = document.querySelector("#game");
const userInstructions = document.querySelector('#user-instructions');
userInstructions.querySelector('.min-num').textContent = settings.lowerBound;
userInstructions.querySelector('.max-num').textContent = settings.upperBound;


function showGameOver(won) {
    let color = (won === true) ? "green" : "red";
    let msg = (won === true) ? 
    "You won!" : `Woops! The correct answer is ${app.data.winningNumber}`;
    const userInputArea = document.querySelector('#guess-input');
    const message = document.querySelector('.message');
    // lock the input box
    userInputArea.disabled = true;
    // display the message
    message.textContent = msg;
    // apply feedback color
    userInputArea.style.border = color;
    message.style.color = color;
}


function showCountDown() {
    const guessesLeft = app.methods.guessesLeft();
    const message = document.querySelector('.message');
    message.textContent = `You have ${guessesLeft} guesses left.`
}


function playGameEvent(event) {  // main driver

    if (event.target.id === "guess-submit") {
        const message = game.querySelector('.message');
        const guessesLeft = settings.maxGuessCount - app.data.guessCount;
        const guessInput = game.querySelector('#guess-input');
        const guess = parseInt(guessInput.value);
        let outcome = false;

        const validInput = !isNaN(guess) && guess >= settings.lowerBound && guess <= settings.upperBound;
        if (!validInput) {
            alert(`Only enter numbers between ${settings.lowerBound} and ${settings.upperBound}`);
        }
        else if (app.data.guessCount < settings.maxGuessCount) {
                // const guess = Number(guessInput.value); changed to parseInt above
                outcome = app.func.guessAttempt(guess, settings.lowerBound, settings.upperBound);
        } 
        else {
            message.textContent = `${guessesLeft} guesses left.`;
        }

        app.methods.incrementGuessCount(1);

        let gameOver = (outcome === true || app.data.guessCount >= settings.maxGuessCount);
        if (gameOver === true)
            showGameOver(outcome);
        else
            showCountDown();
    }
}


// register events
function loadEventListeners() {
    game.addEventListener("click", playGameEvent);
}


// initialize
loadEventListeners();
app.init();
