import React from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="task_list-wrap">
      <div className="task_list-inner">
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
        <TaskItem></TaskItem>
      </div>
    </div>
  );
}

export default TaskList;
