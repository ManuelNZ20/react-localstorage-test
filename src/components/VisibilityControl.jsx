import PropTypes from "prop-types";

export const VisibilityControl = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="show-task-done"
          onChange={() => {
            setShowCompleted((showCompleted) => !showCompleted);
          }}
          checked={isChecked}
        />
      </div>
      <label htmlFor="show-task-done">Show Task Done</label>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};

VisibilityControl.propTypes = {
  setShowCompleted: PropTypes.func.isRequired,
  cleanTasks: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

VisibilityControl.defaultProps = {
  setShowCompleted: () => {},
  cleanTasks: () => {},
};
