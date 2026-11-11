import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanTitle = title.trim();

    if (cleanTitle === "") {
      return;
    }

    onAddTask(cleanTitle);
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="¿Qué necesitas hacer?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button className="task-button" type="submit">
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;
