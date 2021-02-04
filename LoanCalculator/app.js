const loanForm = document.getElementById("loan-form");
console.log(loanForm);


function getLoanRepaymentDetails(loanAmount, interestRate, loanLengthInYears) {
    const results = {
        monthlyPayment: "",
        totalPayment: "",
        totalInterest: "",
    };

    // main driver for calculation event here will use helper functions

    return results;
}

/* Events */
function calculateEvent(event) {
    event.preventDefault();
    // console.log('Calculated!');

    let loanAmount = document.getElementById("amount").value;  // obtain values
    let interestRate = document.getElementById("interest").value;
    let lifetimeYears = document.getElementById("years").value;

    const hasRequiredParameters = loanAmount != "" && interestRate != "" && lifetimeYears != "";  // check all values are supplied
    if (!hasRequiredParameters)
        alert("Not all loan parameters have been supplied!");

    loanAmount = Number(loanAmount);  // prepare data for calculation
    interestRate = Number(interestRate);
    lifetimeYears = Number(lifetimeYears);

    const results = calculateLoanValues(loanAmount, interestRate, lifetimeYears);  // calculate

    let monthlyPayment = document.getElementById("monthly-payment");
    let totalPayment = document.getElementById("total-payment");
    let totalInterest = document.getElementById("total-interest");

    // console.log(monthlyPayment, totalPayment, totalInterest);  // verify

    monthlyPayment.setAttribute('value', results.monthlyPayment);  // output
    totalPayment.setAttribute('value', results.totalPayment);
    totalInterest.setAttribute('value', results.totalInterest);
}


/* Event Listeners */
function loadEventListeners() {
    loanForm.addEventListener('submit', calculateEvent);
}

// init
loadEventListeners();
