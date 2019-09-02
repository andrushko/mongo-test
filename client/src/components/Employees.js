import React, { Component } from 'react';
import Employee from './Employee';
import { Link, Route, Switch } from 'react-router-dom';
import {employeesService} from '../services/Employees.service'
 

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    employeesService.getEmployees().then(result => {
      this.setState({data: result.result});
    });
  }
  
  render() {
    return (
      <div>
      <ul>
          {this.state.data.map((x, i) => <li key={i}> <img src={x.gravatar}></img> {x.email} - <Link to={`/employees/edit/${x.id}`}>edit</Link></li>)}
      </ul>
      <Switch>
        <Route path={`/employees/edit/:id(\\d+)`} component={Employee} />
      </Switch>
      </div>
    );
    
  }
}