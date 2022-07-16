import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

export class ToDoApp extends Component {
  state = {
    tasks: [
      { id: 1, name: "task1", done: false },
      { id: 2, name: "task2", done: false },
    ],
  };
  addToDo = (newInput) => {
    if (newInput == "") {
      alert("tapsiriq elave edin");
    } else if (this.state.tasks.find((task) => task.name === newInput)) {
      alert("bu tapsiriqi elave etmisiniz");
    } else {
      const newTask = {
        id: uuidv4(),
        name: newInput,
        done: false,
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
      });
    }
  };
  render() {
    return (
      <div>
        <ToDo addToDo={this.addToDo} />
        <ToDoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default ToDoApp;
