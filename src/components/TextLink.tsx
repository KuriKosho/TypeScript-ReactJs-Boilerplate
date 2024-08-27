import React from 'react'

interface TextLinkProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const TextLink = (props:TextLinkProps) => {
  return (
    <span onClick={props.onClick} className={`${props.className}`}>
    {props.text}
  </span>
  )
}

export default TextLink
