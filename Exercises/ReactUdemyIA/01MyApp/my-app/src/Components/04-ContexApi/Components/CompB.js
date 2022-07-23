import React, { Component } from "react";
import CompC from "./CompC";
import { oldContext } from "../Contex/NewContext";

export class CompB extends Component {
  render() {
    return (
      <div>
        <h1>CompB</h1>
        <oldContext.Consumer>
          {(data) => {
            return <p>{data}</p>;
          }}
        </oldContext.Consumer>
        <CompC />
      </div>
    );
  }
}

export default CompB;
