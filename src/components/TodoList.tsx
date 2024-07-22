import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { state } = useTodo();

  return (
    <div>
      {state.todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;
