import { render } from "@testing-library/react";
import React, { Component } from "react";

class SertliRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   emeliyyat: true,
      emeliyyat: false,
    };
  }

  render() {
    return this.state.emeliyyat ? (
      <div>Emeliyyat Ugurlu</div>
    ) : (
      <div>Emeliyyat Ugursuz</div>
    );
  }

  //   render() {
  //     if (this.state.emeliyyat) {
  //       return <div>Emeliyyat Ugurlu</div>;
  //     } else {
  //       return <div>Emeliyyat Ugursuz</div>;
  //     }
  //   }
}

export default SertliRender;
