import { createContext, useState, useEffect } from 'react'

export const Theme = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('skyMartTheme') || 'default'
    )

    useEffect(() => {
        document.documentElement.classList.remove('light')
        if (theme === 'light') {
            document.documentElement.classList.add('light')
        }
        localStorage.setItem('skyMartTheme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'default' ? 'light' : 'default'))
    }

    return (
        <Theme.Provider value={{ theme, toggleTheme }}>
            {children}
        </Theme.Provider>
    )
}