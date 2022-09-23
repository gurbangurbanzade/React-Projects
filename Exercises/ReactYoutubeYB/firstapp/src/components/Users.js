import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";

export default class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          return (
            <div className="card-header d-flex justify-content-between">
              {users.name}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
