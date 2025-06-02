
import { FilterButtonsProps, FilterType } from '../types/todo';

const FilterButtons = ({ currentFilter, onFilterChange, todoStats }: FilterButtonsProps) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: todoStats.total },
    { key: 'incomplete', label: 'Active', count: todoStats.incomplete },
    { key: 'completed', label: 'Completed', count: todoStats.completed },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`flex-1 min-w-0 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
            currentFilter === key
              ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-md border border-indigo-200 dark:border-indigo-800'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-700/60'
          }`}
        >
          <span className="block truncate">{label}</span>
          <span className="text-xs opacity-75">({count})</span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
