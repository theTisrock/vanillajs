


// constructor wrapper for XHR object
function easyHTTP() {
    this.http = new XMLHttpRequest();
}


// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);  // connection context, asynchronous

    /* lexical scope passed into the function below. */
    let self = this;

    this.http.onload = function() {  // the plan when the response is returned
        const STATUS = self.http.status;  // this becomes undefined without an arrow function
        const responseOk = STATUS >= 200 && STATUS <= 299;

        if (responseOk) {
            const deserialized = JSON.parse(self.http.responseText);
            // do something with the data
            callback(deserialized);
        } else {
            console.log(`woops: ${deserialized}`);
        }
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