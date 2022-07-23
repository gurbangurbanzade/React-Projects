import React, { Component } from "react";

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
    };
  }
  componentDidMount() {
    let timer = setInterval(() => {
      this.setState((prevstate) => ({
        first: prevstate.first + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.first}</div>;
  }
}

export default Timer;
