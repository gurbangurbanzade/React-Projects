import React, { Component } from "react";

export class ToDo extends Component {
  state = {
    input: "",
  };
  handler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  submitHandler = (e) => {
    this.props.addToDo(this.state.input);
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.handler} />
        <button onClick={this.submitHandler}>Add</button>
      </div>
    );
  }
}

export default ToDo;
