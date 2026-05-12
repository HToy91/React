import { createContext, useState } from 'react'
export const themes = {
    light: {
        foreground: '#242526',
        background: '#ffffff',
    },
    dark: {
        foreground: 'green',
        background: '#242526',
    },
}

    // Let our context know what properties to expect
export const ThemeContext = createContext({
    theme: {},
    toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)

    const toggleTheme = () => {
        setTheme((prevValue) =>
            prevValue === themes.dark ? themes.light : themes.dark
        )
    }

    return (
        <ThemeContext.Provider value = {{ theme: theme, toggleTheme: toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}
