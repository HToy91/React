type Task = {
    id: number;
    text: string;
    completed: boolean;
}

// Originally tried setting task to object type but got error the properties didn't exist on type object, so I created a Task type and set task to that type
type TaskCardProps = {
    task: Task;
    openModalHandler: (taskId: number) => void;
}
function TaskCard({task, openModalHandler}: TaskCardProps) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h2 style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</h2>
                    <button className="btn" onClick={() => openModalHandler(task.id)}>Done</button>
                </div>
            </div>
        </>
    )
}

export default TaskCard;