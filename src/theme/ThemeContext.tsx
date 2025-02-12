import React, { createContext, useContext, useState } from "react";
import { Appearance } from "react-native";

// Buat Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }:any) => {
  // Cek tema default dari sistem
  const systemTheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(systemTheme || "light");

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook untuk mengakses ThemeContext
export const useTheme = () => useContext(ThemeContext);
