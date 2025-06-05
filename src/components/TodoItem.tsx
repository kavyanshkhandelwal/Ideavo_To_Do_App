import React from 'react';
import { Check, Trash2 } from 'lucide-react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onComplete, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center">
        <button
          className={`mr-4 p-2 rounded-full transition-colors ${
            completed
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
          onClick={onComplete}
        >
          <Check size={16} />
        </button>
        <span className={`text-lg ${completed ? 'line-through text-gray-500' : ''}`}>
          {task}
        </span>
      </div>
      <button
        className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
        onClick={onDelete}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
