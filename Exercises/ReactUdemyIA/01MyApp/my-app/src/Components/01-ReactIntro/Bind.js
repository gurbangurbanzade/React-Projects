import React, { Component } from "react";

class Bind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basliq: "Javascript",
    };
  }

  deyis() {
    this.setState({
      basliq: "react",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.basliq}</h1>
        {/* <button onClick={this.deyis.bind(this)}>Deyis</button> */}
        <button onClick={() => this.deyis()}>Deyis</button>
      </div>
    );
  }
}

export default Bind;
