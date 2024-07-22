import React, { createContext, useReducer, useContext, useEffect, ReactNode } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
};

type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number }
  | { type: 'REMOVE_ALL_TODOS' };

type TodoProviderProps = {
  children: ReactNode;
};

const TodoContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = { id: Date.now(), text: action.text, completed: false };
      return { todos: [...state.todos, newTodo] };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case 'REMOVE_ALL_TODOS':
      return { todos: [] };
    default:
      throw new Error('Unhandled action type');
  }
};

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] }, () => {
    const localData = typeof window !== 'undefined' ? localStorage.getItem('todos') : null;
    return localData ? { todos: JSON.parse(localData) } : { todos: [] };
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
