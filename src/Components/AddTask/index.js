import React from "react";
import TaskForm from "../TaskForm";

function AddTask({ addNewTask }) {
  return (
    <div className="add_task-wrap">
      <div className="add_task-inner">
        <h5 className="add_task-header txt-center">New Task</h5>
        <TaskForm onSubmit={addNewTask}></TaskForm>
      </div>
    </div>
  );
}

export default AddTask;
