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


const game = document.querySelector("#game");


const config = {
    upperBound: 10,
    lowerBound: 1,
    target: -1,  // -1 as placeholder for now
    guess: -1,
    remainingGuesses: 3,
};


function playGameEvent(event) {  // main driver

    if (event.target.id === "guess-submit") {
        const guessInput = game.querySelector('#guess-input');
        const guess = Number(guessInput.value);

        const outcome = attemptGuess(guess, config.lowerBound, config.upperBound);
        console.log(outcome);

        const message = game.querySelector('.message');
        message.textContent = (outcome) ? "win" : "lost";
    }
}


function attemptGuess(guess, lowerBound, upperBound) {
    let result = false;
    const target = Math.floor(Math.random() * 10);
    console.log(typeof target, target, typeof guess, guess);

    if (guess >= lowerBound && guess <= upperBound) {
        result = guess === target;
    }

    return result;
}


// register events
function loadEventListeners() {
    game.addEventListener("click", playGameEvent);
}


// initialize
loadEventListeners();
