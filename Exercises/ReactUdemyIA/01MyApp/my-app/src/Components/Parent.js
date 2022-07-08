import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mesaj: "salam",
    };
  }
  salamla() {
    alert(`${this.state.mesaj} necesen?`);
    console.log("asas");
  }
  render() {
    return (
      <div>
        <Child salamla={() => this.salamla()} />
      </div>
    );
  }
}

export default Parent;
