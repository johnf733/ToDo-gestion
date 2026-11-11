import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section>
      <h2>Lista de tareas</h2>

      {tasks.length === 0 ? (
        <p>Aún no hay tareas. ¡Agrega la primera!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
