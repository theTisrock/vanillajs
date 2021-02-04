Loan Calculator

Event Listeners - 
    Calculate

Assets - 
    loan form (needed to listen for submit events from "calculate" button)

Functions -
    calculateRepayment(amount, interest_rate, years_to_repay): there may be some slave functionality here.
    
    repaymentPeriods = yearsToMonths(years) -> months (floating point)


    The results may need to be stuffed into an object:
        { 'monthlyPayment': 900.0, 'totalPayment': 90000.0, 'totalInterest': 150.0 }

    Each of those object fields may require other functions to help. 
    
    For example, the user gives the years for repayment, which needs to be converted into months. There may also be some fine tuning when working with floating points when performing calculations using the interest rate.

