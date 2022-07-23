import React, { Component } from "react";
import { newContext } from "../Contex/NewContext";
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
      </div>
    );
  }
}

export default CompC;
