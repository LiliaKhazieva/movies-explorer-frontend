import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import AuthFormDescription from '../AuthFormDescription/AuthFormDescription';
import './Register.css'

function Register() {
  return (
    <main className='register'>
      <AuthForm
        title={'Добро пожаловать!'}
        buttonName={'Зарегистрироваться'}
        description={
          <AuthFormDescription
            url='/signin'
            label='Войти'
          >
            Уже зарегистрированы?
          </AuthFormDescription>
        }
      >
        <Input
          label='Имя'
          placeholder='Имя'
          minLength='2'
          maxLength='30'
          required
        />
        <Input
          label='E-mail'
          type='email'
          placeholder='E-mail'
          minLength='2'
          maxLength='30'
          required
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
export default Register;