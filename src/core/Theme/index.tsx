import { createTheme } from "@vanilla-extract/css";
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

export const [ themeClass, vars ] = createTheme({
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

export const ThemeContext = createContext<{ theme: string, setTheme: Dispatch<SetStateAction<string>>}>({
  theme: themeClass,
  setTheme: () => { console.warn("Theme hasn't set yet")},
});

export const ThemeProvider = ({ children }: { children: ReactNode | string | ReactNode[] }) => {
  const [theme, setTheme ] = useState("light");
 return (
   <ThemeContext.Provider value={{ theme, setTheme }}>
     {children}
   </ThemeContext.Provider>
 );
}

export const useTheme = () => useContext(ThemeContext);


