// src/components/ThemeToggle.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store/store';
import { toggleTheme } from '../redux/theme/themeSlice';
import { useThemeClass } from '../hooks/useThemeClass';
import "../App.css";
const ThemeToggle: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  // Gọi hook để tự động cập nhật class cho body
  useThemeClass();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleToggle} className={theme ==='light' ? 'btn-mode btn-mode-light':'btn-mode btn-mode-dark'}>
            {theme === 'light' ? 
                    <img src={require("../icons/light.png")} alt="sun" style={{width: '20px', height:'20px'}}/>
             : 
                    <img src={require("../icons/dark.png")} alt="moon" style={{width: '20px', height:'20px'}}/>
            }
      </button>
    </div>
  );
};

export default ThemeToggle;
