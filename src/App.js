import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load tasks
  const fetchTasks = () => {
    fetch("http://127.0.0.1:5000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = () => {
    fetch("http://127.0.0.1:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(() => {
        setTitle("");
        setDescription("");
        fetchTasks();
      });
  };

  // Mark task as completed
  const completeTask = (id) => {
    fetch(`http://127.0.0.1:5000/tasks/${id}/complete`, {
      method: "PUT"
    })
      .then(() => fetchTasks());
  };

  // Separate tasks
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>

      {/* Add Task */}
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <br /><br />

      <button onClick={addTask}>Add Task</button>

      <hr />

      {/* Pending Tasks */}
      <h2>Pending Tasks</h2>
      <ul>
        {pendingTasks.map(task => (
          <li key={task.id}>
            {task.title} — {task.description}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => completeTask(task.id)}
            >
              Mark Completed
            </button>
          </li>
        ))}
      </ul>

      {/* Completed Tasks */}
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>
            {task.title} — {task.description} ✅
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
