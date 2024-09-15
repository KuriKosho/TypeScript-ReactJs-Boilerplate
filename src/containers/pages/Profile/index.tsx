import React, { useContext } from 'react'

const Profile = () => {
  const clickHandler = () => {
    console.log('click')
  }
  return (
    <div>
      <div className="container">
        <div>
          <p onClick={()=> clickHandler()}>
          Profile
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
