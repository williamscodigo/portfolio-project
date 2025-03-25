import { useState, useEffect } from 'react';
import DarkModeIcon from '../assets/moon.svg';
import LightModeIcon from '../assets/sun.svg';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
  onClick={() => setIsDarkMode(!isDarkMode)}
className="p-2 bg-slate-700 dark:bg-gray-800 rounded-full group absolute top-20 right-4 z-40"
>
  <img
    src={isDarkMode ? LightModeIcon : DarkModeIcon}
    className="w-6 h-6 transition duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert"
    alt={isDarkMode ? 'Light Mode Icon' : 'Dark Mode Icon'}
  />
</button>
  );
}

{/* one way to change color to icon when hover, by adding a group to parent button and then using group-hover on img */}
