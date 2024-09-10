import React from 'react'
import BoxInput from '../../../../components/BoxInput';
import SubmitButton from '../../../../components/SubmitButton';
import TextLink from '../../../../components/TextLink';
import classes from '../css/styles.module.css';
import { useTranslation } from 'react-i18next';
interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    loginAction: () => void;
    changeFormAction: (type: 'login' | 'register' | 'confirm' | 'forgot') => void;
}
const LoginForm = (props: LoginFormProps) => {
    const {t} = useTranslation(['auth']);
  return (
    <form className={`w-75 ${classes.form}`}>
        <BoxInput value={props.email} onChange={(event) => props.setEmail(event.target.value)} htmlFor='loginInputEmail1' label={t('auth:login.email')} type='email' placeholder={t('auth:login.email')} id='loginInputEmail1' aria_describedby='emailHelp'/>
        <BoxInput value={props.password} onChange={(event) => props.setPassword(event.target.value)} htmlFor='loginInputPassword1' label={t('auth:login.password')} type='password' placeholder={t('auth:login.password')} id='loginInputPassword1' aria_describedby='passwordHelp'/>
        <div>
            <SubmitButton text={t('auth:login.submit')} className='w-100' onClick={()=> props.loginAction()}/>
            <div className={`d-flex flex-row align-items-center justify-content-between mt-2`}>
                <TextLink text={t('auth:login.register')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('register')}/>
                <TextLink text={t('auth:login.forgot')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('forgot')}/>
            </div>
        </div>
    </form>
  )
}

export default LoginForm
