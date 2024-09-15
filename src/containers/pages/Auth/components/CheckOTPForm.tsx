import React from 'react'
import TextLink from '../../../../components/TextLink';
import classes from '../css/styles.module.css';
import { useTranslation } from 'react-i18next';
import SubmitButton from '../../../../components/SubmitButton';


interface CheckOTPFormProps {
    status: string;
    description?: string;
    changeFormAction: (type: 'login' | 'register' | 'forgot') => void;
}
const CheckOTPForm = (props: CheckOTPFormProps) => {
  const { t } = useTranslation(['auth']);

  return (
<form className={`w-75 ${classes.form}`}>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
           {props.status === 'success' ? <h2 className='text-success'>{t('auth:forgot.success.title')}</h2> : <h2 className='text-danger'>{t('auth:forgot.error.title')}</h2>}
           {props.status === 'success' ? <p className='text-primary'>{t('auth:forgot.success.message')}</p> : <p className='text-primary'>{t('auth:forgot.error.message')}</p>}
        </div>
        <div>
          <SubmitButton text={t('auth:forgot.backToLogin')} className='w-100' onClick={()=> props.changeFormAction('login')}/>
            <div className={`d-flex flex-row align-items-center justify-content-between mt-2`}>
                <TextLink text={t('auth:forgot.register')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('login')}/>
                <TextLink text={t('auth:forgot.title')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('register')}/>
            </div>
        </div>
    </form>
  )
}

export default CheckOTPForm
