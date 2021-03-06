

function _handleResponse(self, method, responseHandlerCallback) {
    const STATUS = self.http.status;
    const response = self.http.responseText;
    const error = `Error: ${STATUS}`;

    responseHandlerCallback(error, response, STATUS, method);
}


// constructor wrapper for XHR object
function easyHTTP() {
    this.http = new XMLHttpRequest();
}


// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, responseHandlerCallback) {
    const method = 'GET'
    this.http.open(method, url, true);  // connection context, asynchronous
    
    let self = this;  // lexical scope passed into the function below.
    this.http.onload = function() {
        _handleResponse(self, method, responseHandlerCallback);
    };

    this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, dataObject, responseHandlerCallback) {  // create a resource
    // prepare request
    const method = 'POST';
    const data = JSON.stringify(dataObject);
    this.http.open(method, url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;
    // SEE IF YOU CAN MAKE BELOW MORE DRY
    this.http.onload = function() {
        _handleResponse(self, method, responseHandlerCallback);
    };

    this.http.send(data);
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, dataObject, responseHandlerCallback) {  // replace a resource
    // prepare request
    const method = 'PUT';
    const data = JSON.stringify(dataObject);
    this.http.open(method, url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;
    // SEE IF YOU CAN MAKE BELOW MORE DRY
    this.http.onload = function() {
        _handleResponse(self, method, responseHandlerCallback);
    };

    this.http.send(data);
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, responseHandlerCallback) {
    // prepare the request
    const method = 'DELETE';
    this.http.open('DELETE', url, true);

    // prepare response handling
    let self = this;
    this.http.onload = function() {
        _handleResponse(self, method, responseHandlerCallback);
    };

    this.http.send();
}
 