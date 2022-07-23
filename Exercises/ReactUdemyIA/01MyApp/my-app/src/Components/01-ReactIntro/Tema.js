import React, { Component } from "react";

export class Tema extends Component {
  constructor() {
    super();
    this.state = {
      bg: "red",
      color: "yellow",
    };
  }
  rengiDeyis() {
    this.setState({
      bg: "blue",
      color: "white",
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color, backgroundColor: this.state.bg }}>
          Salam React
        </h1>
        <button onClick={() => this.rengiDeyis()}>Teamani Deyis</button>
      </div>
    );
  }
}

export default Tema;
