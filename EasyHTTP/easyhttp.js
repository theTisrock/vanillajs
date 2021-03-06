


// constructor wrapper for XHR object
function easyHTTP() {
    this.http = new XMLHttpRequest();
}


// Make an HTTP GET Request
easyHTTP.prototype.get = function(url) {
    this.http.open('GET', url, true);  // connection context, asynchronous

    /* lexical scope */

    this.http.onload = function() {  // the plan when the response is returned
        const STATUS = this.http.status;  // this becomes undefined without an arrow function
        const responseOk = STATUS >= 200 && STATUS <= 299;

        if (responseOk) {
            const deserialized = JSON.parse(this.responseText);
            // do something with the data
            console.log(deserialized);
        } else {
            console.log(`woops: ${this.responseText}`);
        }

        // if (this.http.status === 200) {
        //     console.log(this.http.responseText);
        // }
    }

    this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url) {  // create a resource
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url) {  // replace a resource
    
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url) {
    
}