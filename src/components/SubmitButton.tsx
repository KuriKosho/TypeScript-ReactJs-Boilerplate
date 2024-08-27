import React from 'react'

interface SubmitButtonProps {
    className?: string;
    text: string | 'submit';
    onClick?: () => void;
}
const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <button onClick={props.onClick} type="button" className={`${props.className} btn btn-primary`}>{props.text}</button>
  )
}

export default SubmitButton
