import React, { HTMLInputTypeAttribute } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

interface BoxInputProps {
    htmlFor: string;
    label?: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    id: string;
    aria_describedby: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    button?: string;
    onClick?: () => void;
}
const BoxInput = (props: BoxInputProps) => {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const inputClassName = `${theme === 'dark' ? 
    "form-control bg-dark text-white text-holder-white" : 
    "form-control bg-white text-dark text-holder-black"} 
    ${props.button ? 'pe-65' : ''}`;

  return (
       <div className="form-group">
            {props.label ? <label htmlFor={props.htmlFor}>{props.label}</label> : null}
            <div className='form-btn'>
              <input onChange={props.onChange} value={props.value} type={props.type} 
                className={inputClassName} 
                id={props.id} aria-describedby={props.aria_describedby} 
                placeholder={props.placeholder}
              />
              
              {props.button && <button onClick={props.onClick} className={theme==='dark' ? "btn btn-primary bg-primary": "btn btn-primary bg-primary"}>{props.button}</button>}
            </div>
        </div>
  )
}

export default BoxInput
