import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const SearchTodo: React.FC = () => {
  const [query, setQuery] = useState('');
  const { state } = useTodo();

  const filteredTodos = state.todos.filter(todo =>
    todo.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded mb-4"
        placeholder="Search tasks"
      />
      <div>
        {filteredTodos.map(todo => (
          <div key={todo.id} className="flex justify-between items-center p-2">
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchTodo;
