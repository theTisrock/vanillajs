const name = 'John';
const age = 31;
const job = 'web developer';
const city = 'Miami';
let html;

// Without template strings
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li>' +
'<li>City: ' + city + '</li></ul>';
document.body.innerHTML = html;

// with template strings 

function hello() {
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'old':'young'}</li>
    </ul>
`;

document.body.innerHTML = html;