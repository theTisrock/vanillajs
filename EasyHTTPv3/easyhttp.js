
class EasyHTTP {
    constructor(base_url) {
        this.base_url = base_url;
    }

    async get(endpoint) {
        let full_url = `${this.base_url}${endpoint}/`;

        const response = await fetch(full_url, { method: 'GET' });
        const responseData = await response.json();

        return responseData;       
    }

    async post(endpoint, data) {
        let full_url = `${this.base_url}${endpoint}/`;

        const response = await fetch(full_url, { method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(data) });
        const responseData = await response.json();

        return responseData;
    }

    async put(endpoint, data) {
        let full_url = `${this.base_url}${endpoint}/`;

        const response = await fetch(full_url, { method: 'PUT', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(data) });
        const responseData = await response.json();
    }

    async delete(endpoint) {
        let full_url = `${this.base_url}${endpoint}/`;

        const response = await fetch(full_url, { method: 'DELETE', headers: { 'Content-type': 'application/json' } });
        const responseData = response.status;

        return responseData;
    }
}
