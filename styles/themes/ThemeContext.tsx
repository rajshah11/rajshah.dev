import React from "react";

export type ThemeType = "light" | "dark";
export type ThemeContextType = { theme: ThemeType; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});
