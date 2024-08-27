import React, { HTMLInputTypeAttribute } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store/store';

interface BoxInputProps {
    htmlFor: string;
    label: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    id: string;
    aria_describedby: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const BoxInput = (props: BoxInputProps) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
  return (
       <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input onChange={props.onChange} value={props.value} type={props.type} className={theme==='dark' ? "form-control bg-dark text-white": "form-control bg-white text-dark"} id={props.id} aria-describedby={props.aria_describedby} placeholder={props.placeholder}/>
        </div>
  )
}

export default BoxInput
