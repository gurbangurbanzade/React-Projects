import React, { Component } from "react";

export class User extends Component {
  render() {
    const { name, department, salary } = this.props;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i
              className="fa-solid fa-trash-can"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <div className="card-body">
            <p className="card-text text-start">Departament: {department}</p>
            <p className="card-text text-start">Maas: {salary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
