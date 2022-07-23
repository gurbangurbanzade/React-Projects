import React, { Component } from "react";
import { newContext } from "../Contex/NewContext";
import CompD from "./CompD";
export class CompC extends Component {
  render() {
    return (
      <div>
        <h1>CompC</h1>
        <newContext.Consumer>
          {(info) => {
            return <p>{info.ad + " " + info.soyad}</p>;
          }}
        </newContext.Consumer>
        <CompD />
      </div>
    );
  }
}

export default CompC;
