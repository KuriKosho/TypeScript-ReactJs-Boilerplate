import React, { useState } from 'react'
import classes from '../css/styles.module.css'
import LineBreak from '../../../../components/LineBreak';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import TextLink from '../../../../components/TextLink';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotForm from './ForgotForm';
import ConfirmForm from './ConfirmForm';
import CheckOTPForm from './CheckOTPForm';


type FormType = 'login' | 'register' | 'confirm' | 'forgot' | 'checkOTP';
export type StatusType = 'error' | 'success' | 'warning';
const AuthCard = () => {
  const [formType, setFormType] = useState<FormType>('login');
  
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation(['auth','copyright']);
  // Variables to handle form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<StatusType>('error');

  // Variables to handle form visibility
  const handleAction = () => {
    switch (formType) {
      case 'login':
        console.log('Login Action');
        break;
      case 'register':
        console.log('Register Action');
        setFormType('confirm');
        break;
      case 'confirm':
        console.log('Confirm Action');
        break;
      case 'forgot':
        console.log('Forgot Action');
        setFormType('checkOTP');
        break;
      case 'checkOTP':
        break;
    }
  };

  const renderForm = () => {
    switch (formType) {
      case 'login':
        return <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} loginAction={handleAction} changeFormAction={setFormType} />;
      case 'register':
        return <RegisterForm email={email} password={password} confirmPassword={confirmPassword} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} registerAction={handleAction} changeFormAction={setFormType} />;
      case 'forgot':
        return <ForgotForm email={email} setEmail={setEmail} code={code} setCode={setCode} forgotAction={handleAction} changeFormAction={setFormType} />;
      case 'confirm':
        return <ConfirmForm code={code} setCode={setCode} confirmAction={handleAction} changeFormAction={setFormType} email={email} />;
      case 'checkOTP':
        return <CheckOTPForm status={status} changeFormAction={setFormType} />;
      default:
        return null;
    }
  };
  return (
    <div className={theme === 'light' ? classes.card_light : classes.card_dark}>
      <div className='w-100 h-100 d-flex flex-column align-items-center row-gap-3'>
        <div className={`d-flex flex-column align-items-center w-100 row-gap-4 ${classes.logo}`}>
          <img src={require('../../../../logo/logo.png')} alt='logo' className={classes.logoImage}/>
          <LineBreak />
        </div>
        {renderForm()}
        <div className='d-flex flex-column w-100 align-items-center'>
          <LineBreak />
          <TextLink text={t('copyright:powered')} className='fs-10px fs-sm-11px fs-md-12px text-primary mt-2 mt-sm-2' />
        </div>
      </div>
    </div>
  )
}

export default AuthCard
