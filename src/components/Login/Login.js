import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import AuthFormDescription from '../AuthFormDescription/AuthFormDescription';
import './Login.css'

function Login() {
  return (
    <main className='login'>
      <AuthForm
        title={'Рады видеть!'}
        buttonName={'Войти'}
        buttonClassName='login__button'
        description={
          <AuthFormDescription
            url='/signup'
            label='Регистрация'
          >
            Ещё не зарегистрированы?
          </AuthFormDescription>
        }
      >
        <Input
          label='E-mail'
          type='email'
          placeholder='E-mail'
          minLength='2'
          maxLength='30'
          required
          hasError
        />
        <Input
          label='Пароль'
          type='password'
          placeholder='Пароль'
          minLength='2'
          maxLength='30'
          required
          hasError
        />
      </AuthForm>
    </main>
  )
}
export default Login;