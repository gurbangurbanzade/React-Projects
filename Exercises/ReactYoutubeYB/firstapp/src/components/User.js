import React, { Component } from "react";

export class User extends Component {
  render() {
    const { name, department, salary } = this.props;
    return (
      <div>
        <ul>
          <li>Ad: {name}</li>
          <li>Departament: {department}</li>
          <li>Maas: {salary}</li>
        </ul>
      </div>
    );
  }
}

export default User;
