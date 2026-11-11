import { useState } from "react";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

function TodoPage() {
  const [tasks, setTasks] = useState([]);

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const totalTasks = tasks.length;

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    console.log("Lista de tareas:", [...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  return (
    <main className="todo-container">
      <h1 className="todo-title">Mis tareas</h1>
      <p className="todo-subtitle">Organiza tus actividades diarias</p>

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />

      <div className="task-stats">
        <div className="stat-card">
          <span className="stat-number">{pendingTasks}</span>
          <span className="stat-label">Pendientes</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">{completedTasks}</span>
          <span className="stat-label">Completadas</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>
    </main>
  );
}

export default TodoPage;
