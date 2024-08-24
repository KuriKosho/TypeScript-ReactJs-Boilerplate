import React, { createContext, useEffect, useState } from "react";


interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}
const defaultState = {
    theme: 'light',
    toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultState);

const ThemeContextProvider = ( props:any ) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const themeValue: ThemeContextType = { theme, toggleTheme };
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <ThemeContext.Provider value={themeValue}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;