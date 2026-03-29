import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // LOGIN
const login = async () => {
  console.log("Login clicked");

  const res = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    alert("Login successful!");
    setToken(data.token);
  } else {
    alert(data.message || "Login failed");
  }
};

  // GET TASKS
  const getTasks = async () => {
  if (!token) {
    alert("Please login first");
    return;
  }

  const res = await fetch("http://localhost:5000/api/v1/tasks", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  const data = await res.json();
  setTasks(data);
};

  // CREATE TASK
  const createTask = async () => {
    await fetch("http://localhost:5000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({ title })
    });

    getTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>

      <hr />

      <h2>Tasks</h2>

      <button onClick={getTasks}>Load Tasks</button>

      <br /><br />

      <input
        placeholder="New Task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;