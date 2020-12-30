import React from "react";
import BulkAction from "./BulkAction";
import Search from "./Search";
import TaskList from "./TaskList";

function DisplayTask() {
  return (
    <div className="display_task-wrap">
      <div className="display_task-inner">
        <h5 className="display_task-header txt-center">To Do List</h5>
        <Search />
        <TaskList />
      </div>
      <BulkAction />
    </div>
  );
}

export default DisplayTask;
