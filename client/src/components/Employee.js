import React from 'react';

const Employee = ({ match }) => (
  <h3>Employee with ID {match.params.id}</h3>
);

export default Employee;