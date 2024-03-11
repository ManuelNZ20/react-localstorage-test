import { useState } from "react";
import PropTypes from "prop-types";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form key={"form"} className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          key={"input-create"}
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary ">Save task</button>
      </div>
    </form>
  );
};

TaskCreator.propTypes = {
  createNewTask: PropTypes.func.isRequired,
};

TaskCreator.defaultProps = {
  createNewTask: () => {},
};
