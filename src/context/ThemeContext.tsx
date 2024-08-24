import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ( props:any ) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const themeValue: any = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={themeValue}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;