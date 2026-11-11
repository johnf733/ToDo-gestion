
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label className="task-label">
        <input
          className="task-checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span
          className="task-text"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            opacity: task.completed ? 0.5 : 1,
          }}
        >
          {task.title}
        </span>
      </label>

      <button
        className="task-delete"
        type="button"
        onClick={() => onDelete(task.id)}
      >
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
