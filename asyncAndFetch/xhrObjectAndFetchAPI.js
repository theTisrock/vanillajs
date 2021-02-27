

// ui
const outputBtn = document.querySelector('#button');

function getData(resourceName) {
    let deserializedData = "woops!";
    /* PREPARE THE REQUEST */
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // console.log(xhr.readyState);

    // open an asynchronous request to the resource
    // open(HTTP Method, resource, async: bool)
    xhr.open('GET', resourceName, true);

    // console.log(xhr.readyState);

    // optional: 
    xhr.onprogress = function() {
        // console.log(this.readyState);
    }

    // create a handler for the data
    // NEWER WAY
    xhr.onload = function() {
        // console.log(xhr.readyState);
        const responseOk = this.status >= 200 && this.status <= 299;
        
        if (responseOk)  {
            deserialized = JSON.parse(this.responseText);

            const output = document.querySelector('#output');
            const p = document.createElement('p');
            p.textContent = `The book is called ${deserialized.title}, the author is ${deserialized.author}, isbn ${deserialized.isbn}`;

            output.appendChild(p);
        }
    }


    // LEGACY
    // xhr.onreadystatechange = function() {
    //     console.log(xhr.readyState);
    //     const responseOk = this.status >= 200 && this.status <= 299;
    //     const ready = this.readyState === 4;

    //     if (responseOk && ready) {
    //         console.log(this.responseText);
    //     }


    // }


    /* SEND THE REQUEST */
    xhr.send();

    /* readyState Values:
        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished, response ready
     */
}

function getDataEvent(event) {
    // I'm not getting data here because of the async properties of getData(). 
    // Comes back as undefined
    // logic can be placed in the callback function, which feels kind of weird. 
    getData('data.txt');
    // console.log(data);

    // const output = document.querySelector('#output');
    // const p = document.createElement('p');
    // p.textContent = `The book is called ${data.title}`;

    // output.appendChild(p);

    /* The commented out code above was an attempt to use asynchrnous code, synchronously */
}

function loadEventListeners() {
    outputBtn.addEventListener('click', getDataEvent);
}

// initialize
loadEventListeners();
