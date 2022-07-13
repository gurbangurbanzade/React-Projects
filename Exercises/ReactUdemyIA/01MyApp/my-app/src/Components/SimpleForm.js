import React, { Component } from "react";

export class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lesson: "",
      date: "",
    };
  }
  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  changeLesson = (event) => {
    this.setState({
      lesson: event.target.value,
    });
  };
  changeDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  submitHand = (event) => {
    event.preventDefault();
    alert(`${this.state.name} ${this.state.lesson} ${this.state.date}`);
  };
  render() {
    return (
      <div>
        <div>
          <form action="" onSubmit={this.submitHand}>
            <div>
              <input
                onChange={this.changeName}
                value={this.state.name}
                type="text"
              />
            </div>
            <div>
              <select
                onChange={this.changeLesson}
                value={this.state.lesson}
                name=""
                id=""
              >
                <option>Python</option>
                <option>java</option>
                <option>React</option>
              </select>
            </div>
            <div>
              <input
                onChange={this.changeDate}
                value={this.state.date}
                type="date"
              />
            </div>
            <button type="submit">Gonder</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SimpleForm;
