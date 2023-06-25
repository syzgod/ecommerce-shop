import React, { createContext, useState } from 'react';

export const ThemeContext = createContext<any>({ theme: 'light', undefined });

export const ThemeProvider: React.FC<{}> = ({ children }) => {
  // use localStorage to save the theme choice

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
