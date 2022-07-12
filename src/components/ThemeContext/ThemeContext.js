import { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("lightTheme");
  const tonggleTheme = () => {
    setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme");
  };

  const valueTheme = { theme, tonggleTheme };
  return (
    <ThemeContext.Provider value={valueTheme}>{children}</ThemeContext.Provider>
  );
}
