
// ui
const getCustomerBtn = document.getElementById('button1');
const customerOutput = document.querySelector('#customer');
const getCustomersBtn = document.getElementById('button2');
const customersOutput = document.querySelector('#customers');


// app behavior
function displayCustomer(customerData) {
    const structuredOutput = document.createElement('p');
    structuredOutput.textContent = `Profile: ${customerData.id}, ${customerData.name}, ${customerData.phone}, ${customerData.phone}`;
    customerOutput.appendChild(structuredOutput);
}

function displayCustomers(customersData) {
    const structuredOutput = document.createElement('ol');

    customersData.forEach(function(customer, index) {
        let li = document.createElement('li');
        li.textContent = `id: ${customer.id} name: ${customer.name} company: ${customer.company} phone: ${customer.phone}`;
        structuredOutput.appendChild(li);
    });

    customersOutput.appendChild(structuredOutput);
}

function getCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    
    xhr.onload = function() {
        const responseOk = this.status >= 200 && this.status <= 299;
        if (responseOk) {
            const customerData = JSON.parse(this.responseText);
            displayCustomer(customerData);
        }
    }

    xhr.send();
}

function getCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        const responseOk = this.status >= 200 && this.status <= 299;
        if (responseOk) {
            const customersData = JSON.parse(this.responseText);
            displayCustomers(customersData);
        }
    }

    xhr.send();
}


// Events
function getCustomerEvent(event) {
    getCustomer();
}

function getCustomersEvent(event) {
    getCustomers();
}


function loadEventListeners() {
    getCustomerBtn.addEventListener('click', getCustomerEvent);
    getCustomersBtn.addEventListener('click', getCustomersEvent);
}

loadEventListeners();