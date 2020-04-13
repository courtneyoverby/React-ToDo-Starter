import React, { Component } from "react";

class TaskListItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item.task}</p>
        <button>Complete!</button>
      </div>
    );
  }
}

export default TaskListItem;
