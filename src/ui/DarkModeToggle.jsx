import { useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import Button from './Button';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark'); // Toggle the dark mode class on <html>

    // Update state
    setIsDarkMode((prev) => !prev);

    // Save user preference in localStorage
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
  }

  // Load theme from localStorage or OS preference on page load
  useEffect(() => {
    // Check for saved user preference first
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      // If user has explicitly chosen a theme before, use that
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    } else {
      // If no saved preference, check OS preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    }
  }, []);

  return (
    <Button
      variant="header"
      onClick={toggleDarkMode}
      className={` ${isDarkMode ? 'text-slate-100' : 'text-slate-600'}`}
    >
      {isDarkMode ? (
        <HiOutlineSun className="h-7 w-7 md:h-8 md:w-8" />
      ) : (
        <HiOutlineMoon className="h-6 w-6 md:h-7 md:w-7" />
      )}
    </Button>
  );
}
