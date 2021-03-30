
class EasyHTTP {
    constructor(base_url) {
        this.base_url = base_url;
    }

    get(endpoint) {
        let full_url = `${this.base_url}${endpoint}/`;

        return new Promise((resolve, reject) => {
            fetch(full_url, { 
                method: 'GET'
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(`Error during GET: ${error}`));
        });        
    }

    post(endpoint, data) {
        let full_url = `${this.base_url}${endpoint}/`;

        return new Promise((resolve, reject) => {
            fetch(full_url, { 
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(`Error during POST: ${error}`));
        });
    }

    put(endpoint, data) {
        let full_url = `${this.base_url}${endpoint}/`;

        return new Promise((resolve, reject) => {
            fetch(full_url, { method: 'PUT', headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(`Error during PUT: ${error}`));
        });
    }

    delete(endpoint) {
        let full_url = `${this.base_url}${endpoint}/`;

        return new Promise((resolve, reject) => {
            fetch(full_url, { method: 'DELETE', 
            headers: {
                'Content-type': 'application/json'
            } })
            .then(res => res.json())
            .then(data => resolve('resource deleted'))
            .catch(error => reject(`Error during DELETE: ${error}`));
        });
    }
}
