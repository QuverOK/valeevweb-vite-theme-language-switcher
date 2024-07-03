import { createContext, useEffect, useState } from "react"
import { StorageKey, supportedThemes } from "../../helpers/ui/variables"

export const ThemeContext = createContext({
  theme: supportedThemes.light,
  setTheme: () => {},
  supportedThemes,
})

export function ThemeProvider({ children }) {
  const getTheme = () => {
    let theme = localStorage.getItem(StorageKey)

    if (!theme) {
      localStorage.setItem(StorageKey, supportedThemes.light)
      theme = supportedThemes.light
    }

    return theme
  }

  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    localStorage.setItem(StorageKey, theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
