
import { useState, useMemo } from 'react';
import { Todo, FilterType } from '../types/todo';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TodoForm from '../components/TodoForm';
import FilterButtons from '../components/FilterButtons';
import TodoList from '../components/TodoList';
import ThemeToggle from '../components/ThemeToggle';
import { List } from 'lucide-react';

const Index = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<FilterType>('all');

  const todoStats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const incomplete = total - completed;
    return { total, completed, incomplete };
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
                <List className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Todo List
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Stay organized, get things done
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>

          {/* Add Todo Form */}
          <TodoForm onAddTodo={addTodo} />

          {/* Filter Buttons */}
          <FilterButtons
            currentFilter={filter}
            onFilterChange={setFilter}
            todoStats={todoStats}
          />

          {/* Todo List */}
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />

          {/* Footer Stats */}
          {todos.length > 0 && (
            <div className="mt-8 p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-center text-sm text-slate-600 dark:text-slate-300">
                <span className="font-medium text-slate-800 dark:text-slate-200">{todoStats.total}</span> total • 
                <span className="font-medium text-emerald-600 dark:text-emerald-400"> {todoStats.completed}</span> completed • 
                <span className="font-medium text-indigo-600 dark:text-indigo-400"> {todoStats.incomplete}</span> remaining
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
