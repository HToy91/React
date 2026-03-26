import { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [tasks, setTasks] = useState([
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Build Program", completed: false},
    {id: 3, text: "Pass Class", completed: false}
  ]);

  function openModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  function completeTaskHandler() {
    setCompleted(true);
    setShowModal(false);
  }

  return (
      <>
        <div className="todo-container">
          {tasks.map((task) => (
            <div className="card" key={task.id}>
              <div className="card-content">
                <h2 style={{textDecoration: completed ? "line-through" : "none"}}>{task.text}</h2>
                <button className="btn" onClick={() => openModalHandler()}>Done</button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
            <div>
              <div className="modal">
                <p>Did you complete this task?</p>

                <button className="btn btn-highlight" onClick={() => closeModalHandler()}>Cancel</button>
                <button className="btn" onClick={() => completeTaskHandler()}>Confirm</button>
              </div>

              <div className="backdrop" onClick={() => closeModalHandler()}></div>
            </div>
        )}

      </>
  );
}

export default App;