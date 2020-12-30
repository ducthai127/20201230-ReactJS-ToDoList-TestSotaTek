import React from "react";

function TaskItem() {
  return (
    <div className="task_item-wrap">
      <div className="task_item-inner tdl-flex tdl-flex--justify-space-between tdl-flex--align-center">
        <div className="heading">
          <input type="checkbox" id="title" name="title" value="Bike" />
          <label className="txt-color--darkGrey" htmlFor="title">
            Title
          </label>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn-style--aqua">
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
