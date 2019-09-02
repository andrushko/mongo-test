import config from '../config';

export const authenticationService = {
    login,
    logout,
    getUser
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password })
    };

    return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(response => {
            return response.text().then(text => {
                const data = text && JSON.parse(text);
                if (!response.ok) {
                    if ([401, 403].indexOf(response.status) !== -1) {
                        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                        logout();
                        window.location.reload(true);
                    }
        
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
        
                return data;
            })
        })
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        });
}

function logout() {
    //localStorage.removeItem('currentUser');
}

function getUser() {
    var user = localStorage.getItem('currentUser');
    if(user) {
        var userData = JSON.parse(user).result;
        return {
            fullName: userData.firstName + ' ' + userData.lastName,
            token: JSON.parse(user).token
        }
    }
    return null;
}