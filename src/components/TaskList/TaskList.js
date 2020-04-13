import React, { Component } from "react";

class TaskList extends Component {
  render() {
    const taskArray = this.props.taskList.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.task}</p>
        </div>
      );
    });

    return <div>{taskArray}</div>;
  }
}

export default TaskList;
