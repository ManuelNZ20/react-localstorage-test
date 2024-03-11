import PropTypes from "prop-types";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted }) => {
  const taskTableRows = (doneValue) => {
    return (
      tasks
      .filter(task => task.done === doneValue)
      .map((task) => {
        return <TaskRow key={task.name} task={task} toggleTask={toggleTask} />;
      })
    )
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleTask: PropTypes.func.isRequired,
  showCompleted:PropTypes.bool,
};

TaskTable.defaultProps = {
  task: [],
  toggleTask: () => {},
  showCompleted:false
};
