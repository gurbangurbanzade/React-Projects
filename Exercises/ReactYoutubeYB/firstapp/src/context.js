import React, { Component } from "react";

const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    users: [
      { id: 1, name: "Qurban", department: "IT", salary: "1000" },
      { id: 2, name: "Kenan", department: "IT", salary: "1000" },
      { id: 3, name: "Pamir", department: "IT", salary: "1000" },
    ],
  };

  render() {
    return;
    <UserContext.Provider value={this.state}>
      {this.props.children}
    </UserContext.Provider>;
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;
