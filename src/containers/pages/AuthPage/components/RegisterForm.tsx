import React from 'react'

import classes from '../css/styles.module.css';
import BoxInput from '../../../../components/BoxInput';
import SubmitButton from '../../../../components/SubmitButton';
import TextLink from '../../../../components/TextLink';
import { useTranslation } from 'react-i18next';
interface RegisterFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  registerAction: () => void;
  changeFormAction: (type: 'login' | 'register' | 'confirm' | 'forgot') => void;
}
const RegisterForm = (props : RegisterFormProps) => {
  const {t} = useTranslation(['auth']); 
  return (
    <form className={`w-75 ${classes.form}`}>
    <BoxInput value={props.email} onChange={(event) => props.setEmail(event.target.value)} htmlFor='registerInputEmail1' label={t('auth:register.email')} type='email' placeholder={t('auth:register.email')} id='registerInputEmail1' aria_describedby='emailHelp'/>
    <BoxInput value={props.password} onChange={(event) => props.setPassword(event.target.value)} htmlFor='registerInputPassword1' label={t('auth:register.password')} type='password' placeholder={t('auth:register.password')} id='registerInputPassword1' aria_describedby='password1Help'/>
    <BoxInput value={props.confirmPassword} onChange={(event) => props.setConfirmPassword(event.target.value)} htmlFor='registerInputConfirmPassword1' label={t('auth:register.confirmPassword')} type='password' placeholder={t('auth:register.confirmPassword')} id='registerInputConfirmPassword1' aria_describedby='password2Help'/>
    <div>
        <SubmitButton text={t('auth:register.submit')} className='w-100' onClick={()=> props.registerAction()}/>
        <div className={`d-flex flex-row align-items-center justify-content-between mt-2`}>
            <TextLink text={t('auth:register.login')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('login')}/>
            <TextLink text={t('auth:register.forgot')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('forgot')}/>
        </div>
    </div>
</form>
  )
}

export default RegisterForm;
