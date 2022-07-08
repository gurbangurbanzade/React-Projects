import React, { Component } from "react";

export class ClassEvent extends Component {
  klikle() {
    console.log("class event");
  }
  render() {
    return (
      <div>
        ClassEvent
        <button onClick={this.klikle}>Klikle</button>
      </div>
    );
  }
}

export default ClassEvent;
