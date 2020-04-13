import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TaskList from "co/TaskList/TaskList";

class App extends Component {
  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios
      .get("/tasks")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.warn(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Tasks</h1>
        <TaskList />
      </div>
    );
  }
}

export default App;
