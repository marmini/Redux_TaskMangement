import React, { Component } from 'react';
import TaskManger from './TaskManger';

export default class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <TaskManger/>
      </div>
    )
  }
}