const loanForm = document.getElementById("loan-form");


function getLoanRepaymentDetails(loanAmount, interestRate, loanLengthInYears) {

    let principle = loanAmount;
    let calculatedInterest = interestRate / 100 / 12;
    let calculatedPayments = loanLengthInYears * 12;
    let x = Math.pow(1 + calculatedInterest, calculatedPayments);
    let monthly = (principle * x * calculatedInterest) / (x-1);
    let total = monthly * calculatedPayments;
    let totalInt = (monthly * calculatedPayments) - principle;

    const results = {
        monthlyPayment: monthly,
        totalPayment: total,
        totalInterest: totalInt,
    };

    return results;  // feed this into UI
}


function clearMessage() {
    document.querySelector('.alert').remove();
}


function flashMessage(message, messageType) {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(message));
    const messageBox = document.createElement('div');
    messageBox.appendChild(p);
    messageBox.classList.add('alert');

    switch (messageType) {
        case 'error': messageBox.classList.add('alert-danger');
            break;
        default: break;
    }

    const card = document.querySelector('.card');
    const heading = card.querySelector('h1.heading');
    card.insertBefore(messageBox, heading);

    setTimeout(clearMessage, 3000);
}


/* Events */
function calculateEvent(event) {
    event.preventDefault();

    let loanAmount = document.getElementById("amount").value;  // obtain values
    let interestRate = document.getElementById("interest").value;
    let lifetimeYears = document.getElementById("years").value;

    const hasRequiredParameters = loanAmount != "" && interestRate != "" && lifetimeYears != "";  // check all values are supplied
    if (!hasRequiredParameters) {
        flashMessage("Incorrect or incomplete values supplied!", "error");
    } else {

        loanAmount = parseFloat(loanAmount);  // prepare data
        interestRate = parseFloat(interestRate);
        lifetimeYears = parseFloat(lifetimeYears);

        const results = getLoanRepaymentDetails(loanAmount, interestRate, lifetimeYears);  // calculate

        let monthlyPayment = document.getElementById("monthly-payment");
        let totalPayment = document.getElementById("total-payment");
        let totalInterest = document.getElementById("total-interest");

        monthlyPayment.setAttribute('value', results.monthlyPayment.toFixed(2));  // output
        totalPayment.setAttribute('value', results.totalPayment.toFixed(2));
        totalInterest.setAttribute('value', results.totalInterest.toFixed(2));
    }
}


function loadEventListeners() {
    loanForm.addEventListener('submit', calculateEvent);
}


// init
loadEventListeners();
