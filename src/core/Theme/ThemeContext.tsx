import { createContext, ReactNode } from "react";

import { darkTheme, lightTheme } from "@core/Theme/index.tsx";

type ThemeContextType = {
  type: "light" | "dark";
  theme?: typeof lightTheme ;
};
type ThemeProviderType = ThemeContextType & {
  children: ReactNode | ReactNode[];
}

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext<ThemeContextType>({type: "light"});

/*export const ThemeProvider = ({children, theme, type}: ThemeProviderType) => {
  const currentTheme = {...THEMES[type], ...theme};
  return (
    <ThemeContext.Provider value={}>{children}</ThemeContext.Provider>
  )
}*/