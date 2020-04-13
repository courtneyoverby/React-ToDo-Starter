import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TaskList from "../TaskList/TaskList";

class App extends Component {
  state = {
    taskList: [],
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios
      .get("/tasks")
      .then((response) => {
        // console.log(response.data);
        this.setState(
          {
            taskList: response.data,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => console.warn(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Tasks</h1>
        <TaskList taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
