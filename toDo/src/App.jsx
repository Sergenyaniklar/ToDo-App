import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Master JavaScript", completed: false },
  ]);

  const [filter, setFilter] = useState("all"); // Varsayılan filtre "all"
  const [newTask, setNewTask] = useState(""); // Yeni görev için state

  // Görev tamamlama durumunu değiştirme
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtreleme durumunu değiştirme
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Yeni görev ekleme
  const handleAddTask = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engelle
    if (newTask.trim() === "") return; // Boş görev eklenmesin
    const newTaskObj = {
      id: tasks.length + 1, // Göreve benzersiz bir id ver
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]); // Yeni görevi mevcut listeye ekle
    setNewTask(""); // Giriş alanını temizle
  };

  // Filtrelenmiş görevleri elde etme
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true; // Tüm görevleri göster
    if (filter === "active") return !task.completed; // Sadece tamamlanmamış görevleri göster
    if (filter === "completed") return task.completed; // Sadece tamamlanmış görevleri göster
    return false;
  });

  return (
    <div className="app-container">
      <header>
        <h1>Todo App</h1>
      </header>

      {/* Yeni Görev Ekleme Formu */}
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Kullanıcının yazdığı metni takip et
        />
        <button type="submit">Add</button>
      </form>

      {/* Filtre Butonları */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>

      {/* Görev Listesi */}
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
            onClick={() => handleToggle(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
