
import { useState } from 'react';
import { TodoFormProps } from '../types/todo';
import { CirclePlus } from 'lucide-react';

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 pr-12 text-lg border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
        />
        <button
          type="submit"
          disabled={!title.trim()}
          className="absolute right-2 p-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 dark:disabled:from-slate-600 dark:disabled:to-slate-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          <CirclePlus className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
