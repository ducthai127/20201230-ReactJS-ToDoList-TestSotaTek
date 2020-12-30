import PropTypes from "prop-types";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

TaskForm.propTypes = {
  onSubmit: PropTypes.func,
};

TaskForm.defaultProps = {
  onSubmit: null,
};

function TaskForm(props) {
  const { onSubmit } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState({
    title: "",
    description: "",
    priority: 2,
  });

  const handleValueChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    if (value.title !== "") {
      const formValues = {
        ...value,
        dueDate: startDate,
      };
      onSubmit(formValues);

      // Reset form
      setValue({
        title: "",
        description: "",
        priority: 2,
      });
      setStartDate(new Date());
    }
  };

  return (
    <div className="task_form-wrap">
      <div className="task_form-inner">
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="form-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="title"
                required
                onChange={handleValueChange}
                value={value.title}
                placeholder="Add new task ..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                onChange={handleValueChange}
                value={value.description}
              />
            </div>

            <div className="form-group tdl-flex">
              <div className="left-half">
                <label htmlFor="dueDate">Due Date</label>
                <DatePicker
                  className="form-control"
                  id="dueDate"
                  name="dueDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  value={startDate}
                  dateFormat="d MMM yyyy"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                />
              </div>
              <div className="right-half">
                <label htmlFor="priority">Priority</label>
                <select
                  className="form-control"
                  id="priority"
                  name="priority"
                  onChange={handleValueChange}
                  value={value.priority}
                >
                  <option value={1}>High</option>
                  <option value={2}>Normal</option>
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
