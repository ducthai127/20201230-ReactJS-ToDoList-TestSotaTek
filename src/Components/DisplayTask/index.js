import React, { useState } from "react";
import BulkAction from "./BulkAction";
import Search from "./Search";
import TaskList from "./TaskList";

function DisplayTask({ tasksData }) {
  const [filterSearch, setFilterSearch] = useState("");

  // SEARCH
  const changeFilterSearch = (newFilterSearch) => {
    setFilterSearch(newFilterSearch);
  };

  return (
    <div className="display_task-wrap">
      <div className="display_task-inner">
        <h5 className="display_task-header txt-center">To Do List</h5>
        <Search changeFilterSearch={changeFilterSearch} />
        <TaskList tasksData={tasksData} filterSearch={filterSearch} />
      </div>
      <BulkAction />
    </div>
  );
}

export default DisplayTask;
