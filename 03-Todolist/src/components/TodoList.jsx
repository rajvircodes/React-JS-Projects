// src/components/TodoList.jsx
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  // State: Array of todo objects
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React State', completed: true },
    { id: 2, text: 'Build Todo App', completed: false },
    { id: 3, text: 'Master useState', completed: false }
  ]);
  
  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]); // Add to end of array
  };
  
  // Toggle completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  
  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Clear all completed
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  // Stats
  const totalTodos = todos.length;
  const completedTodos = todos.filter(t => t.completed).length;
  const activeTodos = totalTodos - completedTodos;
  
  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>📝 My Todo List</h1>
        <div className="todo-stats">
          <span>Total: {totalTodos}</span>
          <span>Active: {activeTodos}</span>
          <span>Completed: {completedTodos}</span>
        </div>
      </div>
      
      <TodoForm onAdd={addTodo} />
      
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet! Add one above 👆</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
      
      {completedTodos > 0 && (
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed ({completedTodos})
        </button>
      )}
    </div>
  );
}

export default TodoList;