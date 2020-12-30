import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskForm() {
  const [startDate, setStartDate] = useState(new Date());

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

            <div className="form-group tdl-flex">
              <div className="left-half">
                <label htmlFor="date">Due Date</label>
                <DatePicker
                  className="form-control"
                  id="date"
                  name="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="d MMM yyyy"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                />
              </div>
              <div className="right-half">
                <label htmlFor="priority">Priority</label>
                <select className="form-control" id="priority" name="priority">
                  <option value={2}>Normal</option>
                  <option value={1}>High</option>
                  <option value={3}>Low</option>
                </select>
              </div>
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
