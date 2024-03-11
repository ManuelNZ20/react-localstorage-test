import { useState, useEffect } from "react";
import {
  TaskCreator,
  TaskTable,
  VisibilityControl,
  Container,
} from "./components/";

const App = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (taskItems.find((task) => task.name == taskName)) return;
    setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((taskItem) =>
        taskItem.name == task.name
          ? { ...taskItem, done: !taskItem.done }
          : taskItem
      )
    );
  };
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={setShowCompleted}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
};

export default App;
