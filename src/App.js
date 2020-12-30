import React from "react";
import AddTask from "./Components/AddTask";
import DisplayTask from "./Components/DisplayTask";

function App() {
  return (
    <div className="app main-container tdl-flex tdl-flex--wrap">
      <AddTask />
      <DisplayTask />
    </div>
  );
}

export default App;
