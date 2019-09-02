import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Employees from './components/Employees';
import SignIn from './components/SignIn';
import {authenticationService} from './services/Auth.service'
import Employee from './components/Employee';

class App extends Component {
  render() {
    var user = authenticationService.getUser();

    return (
      <div className="App">
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/employees">Employees</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> { user ? <span className="profileName">{user.fullName} <button onClick={authenticationService.logout()}>Logout</button></span> 
                : <Link to="/login">Login</Link>} </li>
            </ul>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/employees" component={Employees} />
            <Route path="/employees/edit/:id(\\d+)" component={Employee} />
            <Route path="/about" component={About} />
            <Route path="/login" component={SignIn} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
