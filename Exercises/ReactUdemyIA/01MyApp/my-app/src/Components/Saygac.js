import React, { Component } from "react";

export class Saygac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saygac: 0,
    };
  }

  // artirSay() {
  //   this.setState({
  //     saygac: this.state.saygac + 1,
  //   });
  // }
  artirSay() {
    this.setState((prevState) => ({
      saygac: prevState.saygac + 1,
    }));
  }
  ikiArtirSay() {
    this.setState((prevState) => ({
      saygac: prevState.saygac + 2,
    }));
  }
  azaltSay() {
    this.setState({
      saygac: this.state.saygac - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Saygac: {this.state.saygac} </h1>
        <button onClick={() => this.artirSay()}>Artir</button>
        <button onClick={() => this.ikiArtirSay()}>iki Artir</button>
        <button onClick={() => this.azaltSay()}>Azalt</button>
      </div>
    );
  }
}

export default Saygac;
