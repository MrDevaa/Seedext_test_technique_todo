import React from 'react';
import { TodoProvider, useTodo } from '../context/TodoContext';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import ClearTodos from '../components/ClearTodos';

const Home: React.FC = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
      </div>
    </TodoProvider>
  );
};

const Footer: React.FC = () => {
  const { state } = useTodo();

  return (
    <div className="flex justify-between items-center mt-4">
      <p className="text-gray-600">You have {state.todos.length} pending tasks</p>
      <ClearTodos />
    </div>
  );
};

export default Home;
