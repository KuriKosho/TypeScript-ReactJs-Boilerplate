import React from 'react'
import AuthHeader from './Header'

interface AuthLayoutProps  {
    children: React.ReactNode
}
const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <div>
      <AuthHeader />
        <div>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout
