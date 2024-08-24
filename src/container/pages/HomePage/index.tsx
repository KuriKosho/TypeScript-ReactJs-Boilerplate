import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';

const HomePage = () => {
  const theme = useContext(ThemeContext);
  const clickHandler = () => {
    theme.toggleTheme();
  }
  return (
    <div>
      <div className="container">
        <div>
          <p onClick={()=> clickHandler()}>
          HomePage
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
