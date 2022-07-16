import React, { Component } from "react";

export class ToDoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => {
          return (
            <div key={task.id}>
              <li>{task.name}</li>
              <button onClick={() => this.props.removeToDo(task.name)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ToDoList;
