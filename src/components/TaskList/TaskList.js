import React, { Component } from "react";
import TaskListItem from "../TaskListItem/TaskListItem";

class TaskList extends Component {
  render() {
    const taskArray = this.props.taskList.map((item, index) => {
      return <TaskListItem key={index} item={item} />;
    });

    return <div>{taskArray}</div>;
  }
}

export default TaskList;
