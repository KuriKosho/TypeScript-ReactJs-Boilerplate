import React, { useState } from 'react'
import classes from '../css/styles.module.css'
import LineBreak from '@components/LineBreak';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store/store';
import BoxInput from '@components/BoxInput';
import SubmitButton from '@components/SubmitButton';
import TextLink from '@components/TextLink';
const LoginCard = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation(['auth','copyright']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={theme==='light' ? classes.card_light : classes.card_dark}>
      <div className='w-100 h-100 d-flex flex-column align-items-center'>
        <div className={`d-flex flex-row align-items-center ${classes.logo}`}>
          <img src={require('../../../../logo/logo.png')} alt='logo' style={{width: 100, height: 100}}/>
        </div>
        <LineBreak/>
        <form className={`w-75 ${classes.form}`}>
          <BoxInput value={email} onChange={(event) => setEmail(event.target.value)} htmlFor='exampleInputEmail1' label={t('auth:login.email')} type='email' placeholder={t('auth:login.email')} id='exampleInputPassword1' aria_describedby='emailHelp'/>
          <BoxInput value={password} onChange={(event) => setPassword(event.target.value)} htmlFor='exampleInputPassword1' label={t('auth:login.password')} type='password' placeholder={t('auth:login.password')} id='exampleInputPassword1' aria_describedby='passwordHelp'/>
          <div>
            <SubmitButton text={t('auth:login.submit')} className='w-100'/>
            <div className={`d-flex flex-row align-items-center justify-content-between mt-2`}>
              <TextLink text={t('auth:login.register')} className='fs-10px fs-sm-11px fs-md-12px text-primary'/>
              <TextLink text={t('auth:login.forgot')} className='fs-10px fs-sm-11px fs-md-12px text-primary'/>
            </div>
          </div>
        </form>
       <LineBreak/>
       <div className='my-sm-2 my-md-3 my-1 d-flex flex-row'>
        <TextLink text={t('copyright:powered')} className='fs-10px fs-sm-11px fs-md-12px text-primary'/>
       </div>
      </div>
    </div>
  )
}

export default LoginCard
