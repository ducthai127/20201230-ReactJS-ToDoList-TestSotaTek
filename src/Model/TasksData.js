var randomId = require("random-id");

// Note:
// priority --> 1: High, 2: Normal, 3: Low
// status --> 1: Not Yet Started, 2: In Progress, 3: Done, 4: Cancel

const TasksData = [
  {
    id: randomId(5, "aA0"),
    title: "Do homework",
    description: "Do homework is Lorem Ipsum",
    dueDate: new Date(),
    priority: 1,
    status: 1,
  },
  {
    id: randomId(5, "aA0"),
    title: "Do housework",
    description: "Do housework is Lorem Ipsum",
    dueDate: new Date(),
    priority: 2,
    status: 2,
  },
  {
    id: randomId(5, "aA0"),
    title: "Learn something",
    description: "Learn something is Lorem Ipsum",
    dueDate: new Date(),
    priority: 3,
    status: 3,
  },
  {
    id: randomId(5, "aA0"),
    title: "Travel",
    description: "Travel is Lorem Ipsum",
    dueDate: new Date(),
    priority: 3,
    status: 4,
  },
];

export default TasksData;
