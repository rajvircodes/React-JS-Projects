import { useState } from "react";

useState;

const App = () => {
  const [task, setTask] = useState([]); // state to store tasks
  const [input, setInput] = useState(""); // state to store input

  // Add tasks
  const addTask = () => {
    if (input.trim() === "") return;
    setTask([...task, input]);
    setInput("");
  };

  //delete tasks

  const deleteTask = (id) => {
    const newTask = task.filter((_, index) => index !== id);
    setTask(newTask);
  };

  return (
    <div>
      <h1>Daily Tasks</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>
      <button onClick={deleteTask}>Delete</button>

      <ul>
        {task.map((task, index) => [<li key={index}>{task}</li>])}
      
      </ul>
    </div>
  );
};

export default App;
