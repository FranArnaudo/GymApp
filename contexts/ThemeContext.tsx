import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../components/theme/theme";

export const ThemeContext = createContext<{ theme: Theme, setTheme: React.Dispatch<React.SetStateAction<Theme>> | (() => void) }>({ theme: darkTheme, setTheme: () => { } })

type ThemeProviderProps = {
  children: JSX.Element
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(darkTheme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}