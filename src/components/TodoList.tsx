import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ task: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { task: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodoCompletion = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-l-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
        />
        <button
          className="px-4 py-2 rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            task={todo.task}
            completed={todo.completed}
            onComplete={() => toggleTodoCompletion(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
