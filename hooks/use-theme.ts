import { useEffect, useState } from 'react';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      return;
    }
  }, []);

  const themeToggle = () => {
    if (theme === 'light') {
      setMode('dark');
      return;
    }
    setMode('light');
  };

  return [theme, themeToggle];
};
