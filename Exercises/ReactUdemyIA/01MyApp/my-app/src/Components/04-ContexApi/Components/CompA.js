import React, { Component } from "react";
import CompB from "./CompB";
export class CompA extends Component {
  render() {
    return (
      <div>
        <h1>CompA</h1>
        <CompB />
      </div>
    );
  }
}

export default CompA;
