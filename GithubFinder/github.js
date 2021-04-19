// github http client for interfacing with github web api

// TODO: Set up this application with Github API key

class Github {

    constructor() {
        this.API_KEY = config.apiKey;
        this.BASE_URL = config.baseURL;

        this.headers = {
            'Content-Type': "application/json",
            'Authorization': `token ${this.API_KEY}`,
        }
    }


    async getProfile(username) {
        const url = `${this.BASE_URL}users/${username}`;

        let response = await fetch(url, { headers: this.headers });
        let profile = await response.json();

        return {
            info: response,  // return this to make decisions about what to display in app.js
            profile
        }
    }

}
