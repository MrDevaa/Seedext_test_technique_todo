import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', text });
      setText('');
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
        placeholder="Add your new todo"
      />
      <button
        onClick={handleAddTodo}
        className="bg-purple-500 text-white p-2 rounded-r-md hover:bg-purple-700"
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
