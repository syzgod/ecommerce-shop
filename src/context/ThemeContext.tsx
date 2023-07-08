import React, { createContext, useState } from 'react';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<any>({ theme: 'light', undefined });

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  // use localStorage to save the theme choice

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
