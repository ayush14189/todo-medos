
import { Todo, FilterType } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

const TodoList = ({ todos, filter, onToggle, onDelete, onUpdate }: TodoListProps) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    const messages = {
      all: "No todos yet. Add one above to get started!",
      completed: "No completed todos yet. Mark some as done!",
      incomplete: "All caught up! No pending todos."
    };

    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 opacity-30">📝</div>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          {messages[filter]}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
