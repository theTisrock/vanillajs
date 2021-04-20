// worker for DOM manipulation, slave to app.js

class UI {

    constructor() {
        // UI components to be manipulated
        this.profile = document.querySelector('#profile');
        // this.alertArea = null;
    }


    showProfile(user) {

        this.profile.innerHTML = '';

        if (typeof user.login !== "undefined") {  // basing the decision on login could be fragile, but it works.
            this.profile.innerHTML = `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src=${user.avatar_url} />
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">
                            View Profile
                            </a>
                        </div>

                        <div class="col-md-9">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-info">Following: ${user.following}</span>

                            <br />

                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 class="page-heading mb-3">Latest Repos</h3>
            `;
        }
    }


    showAlert(statusCode, statusText, className, timeoutSeconds) {

        let alert = document.querySelector('#alert');
        
        if (alert)
            alert.remove();

        const alertComponent = document.createElement('div');
        alertComponent.setAttribute('id', 'alert');
        alertComponent.className = className;

        alertComponent.innerHTML = `<p>${statusCode}: ${statusText}</p>`;

        this.profile.appendChild(alertComponent);

        setTimeout(() => {
            let alert = document.querySelector('#alert');

            if (alert)
                document.querySelector('#alert').remove() 
        }, timeoutSeconds);
    }

}
