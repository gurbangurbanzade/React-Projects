import React, { Component } from "react";

class User extends Component {
  render() {
    const(name:string,salary:string,department:string)=this.props as object
    return (
      <div>
        <ul>
          <li>Ad : {name}</li>
          <li>Departament :{depatment}</li>
          <li>Maas : {salary}</li>
        </ul>
      </div>
    );
  }
}
export default User;
