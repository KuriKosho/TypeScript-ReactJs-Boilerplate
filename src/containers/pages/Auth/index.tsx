import React from 'react'
import AuthCard from './components/AuthCard'
import NavHeader from './components/NavHeader'
import Watermark from './components/WaterMark'

const AuthPage = () => {

  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100%' }}>
      <NavHeader/>
      <Watermark content="Powered by KuriKosho"/>
      <div className="d-flex flex-row align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <AuthCard/>
      </div>
    </div>
  )
}

export default AuthPage
