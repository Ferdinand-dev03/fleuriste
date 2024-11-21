import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = ({children})=> {
    const [theme, setTheme] = useState('light')
    const toggle = ()=> { setTheme(theme === 'light' ? 'dark' : 'light')}

    return(
        <ThemeContext.Provider value={{toggle, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;