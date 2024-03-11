import PropTypes from "prop-types";

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          onChange={() => {
            toggleTask(task);
          }}
          checked={task.done}
        />
      </td>
    </tr>
  );
};

TaskRow.propTypes = {
  task: PropTypes.object.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

TaskRow.defaultProps = {
  task: {},
  toggleTask: () => {},
};
