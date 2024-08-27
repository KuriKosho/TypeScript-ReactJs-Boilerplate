import React from 'react'

interface LogoProps {
    className?: string;
    width: number | 100;
    height: number | 100;
    source: string;
}

const Logo = (props: LogoProps) => {
  return (
   <div className={`d-flex flex-row align-items-center ${props.className}`}>
          <img src={require(props.source)} alt='logo' style={{width: props.width, height: props.height}}/>
    </div>
  )
}

export default Logo
