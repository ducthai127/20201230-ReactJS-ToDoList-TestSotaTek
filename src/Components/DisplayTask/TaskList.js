import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasksData, filterSearch }) {
  let sortData = tasksData.sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  let filterTasks = [];
  filterTasks = sortData.filter((task) => {
    return task.title.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1;
  });

  let taskItem = filterTasks.map((item, index) => {
    return <TaskItem key={index} item={item} />;
  });

  return (
    <div className="task_list-wrap">
      <div className="task_list-inner">{taskItem}</div>
    </div>
  );
}

export default TaskList;
