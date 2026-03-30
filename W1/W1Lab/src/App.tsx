import { useState } from 'react';
import './App.css';
import Modal from "./Modal.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const [tasks, setTasks] = useState([
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Build Program", completed: false},
    {id: 3, text: "Pass Class", completed: false}
  ]);

  function openModalHandler(taskId: number) {
    setShowModal(true);
    setSelectedTaskId(taskId)
  }

  function closeModalHandler() {
    setShowModal(false);
    setSelectedTaskId(null);
  }

  function completeTaskHandler() {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === selectedTaskId
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
            <div className="card" key={task.id}>
              <div className="card-content">
                <h2 style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</h2>
                <button className="btn" onClick={() => openModalHandler(task.id)}>Done</button>
              </div>
            </div>
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