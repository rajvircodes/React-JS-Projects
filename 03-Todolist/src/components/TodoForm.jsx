// src/components/TodoForm.jsx
import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (inputValue.trim() === '') return; 
    
    onAdd(inputValue);
    setInputValue(''); 
  };
  
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;