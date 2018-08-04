import React, { Component } from 'react';
import TaskManger from './TaskManger';
import TableEdit from './TableEdit';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <TableEdit />
        {/* <TaskManger/> */}
      </div>
    )
  }
}