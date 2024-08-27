import React, { useContext } from 'react'

const HomePage = () => {
  const clickHandler = () => {
    console.log('click')
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
