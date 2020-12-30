import React from "react";

function TaskForm() {
  return (
    <div className="task_form-wrap">
      <div className="task_form-inner">
        <form className="custom-form">
          <div className="form-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Add new task ..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select className="form-control" id="priority" name="priority">
                <option value={2}>Normal</option>
                <option value={1}>High</option>
                <option value={3}>Low</option>
              </select>
            </div>
          </div>
          <div className="form-footer">
            <button type="submit" className="btn-style--green wt-100">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
