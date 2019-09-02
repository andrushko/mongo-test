// zedoir1@gmail.com
import React from 'react';
import {authenticationService} from '../services/Auth.service'

function handleClick(e) {
    var userUmail = document.getElementById('email');
    var password = document.getElementById('password'); // test123

    authenticationService.login(userUmail.value, password.value).then(tokenResponse => {
        if(tokenResponse.token){
            window.location = '/';
        }
    });
}

const SIgnIn = () => (
    <div className="container">
        <input type="email" id="email" placeholder="Enter Email" name="email" required />
        <br />
        <input type="password" id="password" placeholder="Enter Password" name="psw" required />
        <br />
        <button type="submit" onClick={handleClick}>Login</button>
    </div>
);

export default SIgnIn;