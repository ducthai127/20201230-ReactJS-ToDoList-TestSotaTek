import React from "react";

function TaskItem({ item }) {
  const handleEditing = () => {
    console.log("Test editing");
  };

  return (
    <div className="task_item-wrap">
      <div className="task_item-inner tdl-flex tdl-flex--justify-space-between tdl-flex--align-center">
        <div className="heading">
          <input
            type="checkbox"
            id={item.id}
            name={item.title}
            value={item.id}
          />
          <label className="txt-color--darkGrey" htmlFor={item.id}>
            {item.title}
          </label>
        </div>
        <div className="btn-group">
          <button
            type="submit"
            className="btn-style--aqua"
            onClick={handleEditing}
          >
            Detail
          </button>
          <button type="submit" className="btn-style--red">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
