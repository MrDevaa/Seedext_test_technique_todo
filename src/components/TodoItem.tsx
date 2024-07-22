import React from 'react';
import { useTodo } from '../context/TodoContext';

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  return (
    <div className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow">
      <span
        onClick={handleToggle}
        className={`flex-grow cursor-pointer ${completed ? 'line-through text-gray-400' : ''}`}
      >
        {text}
      </span>
      <button
        onClick={() => dispatch({ type: 'REMOVE_TODO', id })}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
