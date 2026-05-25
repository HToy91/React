import React, { createContext, useState } from 'react'

export const themes = {
    light: {
        foreground: 'black',
        background: 'white',
    },
    dark: {
        foreground: 'white',
        background: 'black',
    },
}

// Let our context know what properties to expect
export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
