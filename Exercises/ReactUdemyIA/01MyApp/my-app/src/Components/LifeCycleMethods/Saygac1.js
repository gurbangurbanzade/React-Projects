import React, { Component } from "react";

export class Saygac1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      klik: 0,
    };
  }
  componentDidMount() {
    document.title = this.state.klik;
  }
  componentDidUpdate() {
    document.title = this.state.klik;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ klik: this.state.klik + 1 })}>
          {this.state.klik} defe kliklendi
        </button>
      </div>
    );
  }
}

export default Saygac1;
