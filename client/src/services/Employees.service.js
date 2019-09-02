import config from '../config';
import {authenticationService} from './Auth.service'

function getEmployees() {
    var currentUser = authenticationService.getUser();

    if(currentUser) {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`
            }
        };
        if(!currentUser.token) {
            window.location = "/login";
            return;
        }
        return fetch(`${config.apiUrl}/users`, requestOptions)
            .then(response => {
                return response.text().then(text => {
                    const data = text && JSON.parse(text);
                    return data;
                });
            });
    } else {
        return Promise.reject([]);
    }
}

export const employeesService = {
    getEmployees
};


