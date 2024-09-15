import React, { useContext } from 'react'

const Dashboard = () => {
  const clickHandler = () => {
    console.log('click')
  }
  return (
    <div>
      <div className="container">
        <div>
          <p onClick={()=> clickHandler()}>
          Dashboard
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
