import { useState } from 'react';
import './App.css';
import Modal from "./Modal.tsx";
import TaskCard from "./TaskCard.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  // selectedTaskId can either be a number or null, but initially it's null
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  // Initialize state with an array of task objects
  const [tasks, setTasks] = useState([
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Build Program", completed: false},
    {id: 3, text: "Pass Class", completed: false}
  ]);

  // Open modal and set selectedTaskId when "Done" button is clicked
  function openModalHandler(taskId: number) {
    setShowModal(true);
    setSelectedTaskId(taskId)
  }

  function closeModalHandler() {
    setShowModal(false);
    // Clear selected task
    setSelectedTaskId(null);
  }

  function completeTaskHandler() {
    setTasks((currentTasks) =>
        currentTasks.map((task) =>
            task.id === selectedTaskId
                // Copy original task and update completed property to true
                ? {...task, completed: true}
                : task
        )
    );

    setShowModal(false);
    setSelectedTaskId(null);
  }

  return (
      <>
        <div className="todo-container">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              openModalHandler={openModalHandler}
            />
          ))}
        </div>

        {showModal && (
            <Modal
              completeTaskHandler={completeTaskHandler}
              closeModalHandler={closeModalHandler}
            />
        )}
      </>
  );
}

export default App;