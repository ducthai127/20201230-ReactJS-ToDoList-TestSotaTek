import ListOfTask from "./ListOfTask";
import Task from "./Task";
import TasksData from "./TasksData";

let listOfTask = new ListOfTask();

for (let task of TasksData) {
  let id = task.id;
  let title = task.title;
  let description = task.description;
  let dueDate = task.dueDate;
  let priority = task.priority;
  let status = task.status;

  let newTask = new Task(id, title, description, dueDate, priority, status);
  listOfTask.addTask(newTask);
}

export default listOfTask;
