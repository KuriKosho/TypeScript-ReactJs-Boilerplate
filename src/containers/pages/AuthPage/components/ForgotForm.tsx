import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from '../css/styles.module.css';
import BoxInput from '../../../../components/BoxInput';
import SubmitButton from '../../../../components/SubmitButton';
import TextLink from '../../../../components/TextLink';

interface ForgotFormProps {
  email: string;
  setEmail: (email: string) => void;
  forgotAction: () => void;
  changeFormAction: (type: 'login' | 'register' | 'confirm' | 'forgot') => void;
  code: string;
  setCode: (code: string) => void;
}
const ForgotForm = (props: ForgotFormProps) => {
  const { t } = useTranslation(['auth']);
  return (
    <form className={`w-75 ${classes.form}`}>
        <BoxInput value={props.email} 
                  onChange={(event) => props.setEmail(event.target.value)} 
                  htmlFor='forgotInputEmail1' label={t('auth:forgot.email')} 
                  type='email' placeholder={t('auth:forgot.email')} 
                  id='forgotInputEmail1' 
                  aria_describedby='emailHelp2'
                  button='Send'
                  onClick={()=> props.forgotAction && props.forgotAction()}
                  />
        <BoxInput value={props.code} onChange={(event) => props.setCode(event.target.value)} htmlFor='forgotInputCode1' label={t('auth:forgot.code')} type='text' placeholder={t('auth:forgot.code')} id='forgotInputPassword1' aria_describedby='forgotHelp2'/>
        <div>
            <SubmitButton text={t('auth:forgot.submit')} className='w-100' onClick={()=> props.forgotAction()}/>
            <div className={`d-flex flex-row align-items-center justify-content-between mt-2`}>
                <TextLink text={t('auth:forgot.login')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('login')}/>
                <TextLink text={t('auth:forgot.register')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('register')}/>
            </div>
        </div>
    </form>
  )
}

export default ForgotForm
