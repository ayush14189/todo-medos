
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border border-slate-200 dark:border-slate-600"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500 dark:text-amber-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
