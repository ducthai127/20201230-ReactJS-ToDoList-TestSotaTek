import randomId from "random-id";
import React, { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";

import listOfTask from "./Model/getData";

function App() {
  const [tasksData, setTasksData] = useState([]);

  // GET Data from Local Storage
  useEffect(() => {
    const getTasksData = () => {
      let tasksJSON = JSON.parse(localStorage.getItem("tasksData"));
      tasksJSON ? setTasksData(tasksJSON) : setTasksData(listOfTask.list);
    };
    getTasksData();
  }, []);

  // ADD New Task
  const addNewTask = (formValues) => {
    const newTask = {
      id: randomId(5, "aA0"),
      ...formValues,
    };
    const newTaskList = [...tasksData];
    newTaskList.push(newTask);
    setTasksData(newTaskList);
    localStorage.setItem("tasksData", JSON.stringify(newTaskList));
  };

  return (
    <div className="app main-container tdl-flex tdl-flex--wrap">
      <AddTask addNewTask={addNewTask} />
      <DisplayTask tasksData={tasksData} />
    </div>
  );
}

export default App;
