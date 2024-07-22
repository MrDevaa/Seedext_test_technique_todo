import React from 'react';
import { useTodo } from '../context/TodoContext';

const ClearTodos: React.FC = () => {
  const { dispatch } = useTodo();

  const handleClearTodos = () => {
    dispatch({ type: 'REMOVE_ALL_TODOS' });
  };

  return (
    <button
      onClick={handleClearTodos}
      className="bg-purple-500 text-white py-1 px-3 rounded hover:bg-purple-700 transition-colors"
    >
      Clear All
    </button>
  );
};

export default ClearTodos;
