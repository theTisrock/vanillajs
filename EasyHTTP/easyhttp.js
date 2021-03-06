


// constructor wrapper for XHR object
function easyHTTP() {
    this.http = new XMLHttpRequest();
}


// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, responseHandlerCallback) {
    this.http.open('GET', url, true);  // connection context, asynchronous
    let self = this;  // lexical scope passed into the function below.

    this.http.onload = function() {  // the plan when the response is returned
        const STATUS = self.http.status;
        const response = self.http.responseText;
        const error = `Error: ${STATUS}`;

        responseHandlerCallback(error, response, STATUS);
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