
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Vérifier si un thème est enregistré dans localStorage
    const savedTheme = localStorage.getItem('taski-theme');
    
    // Vérifier également la préférence du système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Utiliser le thème enregistré ou par défaut la préférence système
    const initialDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    setIsDarkMode(initialDarkMode);
    
    // Appliquer le thème initial
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('taski-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('taski-theme', 'light');
      }
      
      return newTheme;
    });
  };

  return (
    <Button 
      onClick={toggleTheme} 
      variant="ghost" 
      size="icon"
      className=" hover:bg-taski-secondary"
      aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
