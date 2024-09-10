import React, { useEffect } from 'react'
import BoxInput from '../../../../components/BoxInput';
import SubmitButton from '../../../../components/SubmitButton';
import TextLink from '../../../../components/TextLink';
import classes from '../css/styles.module.css';
import { useTranslation } from 'react-i18next';
import { encodeEmail } from '../../../../utils/encode';

interface ConfirmFormProps {
    code : string;
    setCode : (code: string) => void;
    confirmAction : () => void;
    changeFormAction : (type: 'login' | 'register' | 'confirm' | 'forgot') => void;
    email: string;
}
const ConfirmForm = ( props: ConfirmFormProps) => {
    const {t} = useTranslation(['auth']);
    return (
      <form className={`w-75 ${classes.form}`}>
            <strong>{t('auth:confirm.title')}</strong>
            <p>{t('auth:confirm.message')} <b> {encodeEmail(props.email)} </b> </p>
            <BoxInput value={props.code} onChange={(event) => props.setCode(event.target.value)} htmlFor='confirmInputCode'  type='text' placeholder={t('auth:confirm.title')} id='confirmInputCode1' aria_describedby='codeHelp'/>
            <div className='d-flex flex-row justify-content-between'>
                <p className='fs-10px fs-sm-11px fs-md-12px'>
                    {t('auth:confirm.didnotReceive')}
                </p>
                <TextLink text={t('auth:confirm.resend')} className='fs-10px fs-sm-11px fs-md-12px text-primary ' onClick={()=> props.changeFormAction('forgot')}/>
            </div>
            <div>
                <SubmitButton text={t('auth:confirm.submit')} className='w-100' onClick={()=> props.confirmAction()}/>
                <div className={`d-flex flex-row align-items-center justify-content-between mt-2`}>
                    <TextLink text={t('auth:confirm.haveAccount')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('login')}/>
                    <TextLink text={t('auth:confirm.forgot')} className='fs-10px fs-sm-11px fs-md-12px text-primary' onClick={()=> props.changeFormAction('forgot')}/>
                </div>
            </div>
      </form>
    )
}

export default ConfirmForm
