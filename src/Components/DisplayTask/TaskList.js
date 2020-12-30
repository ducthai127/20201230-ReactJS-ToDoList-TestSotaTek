import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasksData }) {
  let taskItem = tasksData.map((item, index) => {
    return <TaskItem key={index} item={item} />;
  });

  return (
    <div className="task_list-wrap">
      <div className="task_list-inner">{taskItem}</div>
    </div>
  );
}

export default TaskList;
