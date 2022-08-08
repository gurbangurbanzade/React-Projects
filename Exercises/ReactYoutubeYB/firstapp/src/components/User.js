import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

export class User extends Component {
  state = {
    isVisible: false,
  };
  onclickEvent(e) {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }
  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4
              className="d-inline bg-primary "
              onClick={this.onclickEvent.bind(this)}
            >
              {name}
            </h4>
            <i
              className="fa-solid fa-trash-can"
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          {isVisible ? (
            <div className="card-body">
              <p className="card-text text-start">Departament: {department}</p>
              <p className="card-text text-start">Maas: {salary}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default User;
