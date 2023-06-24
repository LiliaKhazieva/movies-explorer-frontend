import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import AuthFormDescription from '../AuthFormDescription/AuthFormDescription';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import './Register.css'

function Register({ onRegister, isLoggedIn }) {
  const { values, handleChange, isValid, errors } = useFormAndValidation(false);
  const isDisabled = !isValid;
  let location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  if (isLoggedIn) {
    return <Navigate to='/movies' state={{ from: location }} replace />;
  }

  return (
    <main className='register'>
      <AuthForm
        disabled={isDisabled}
        onSubmit={handleSubmit}
        title={'Добро пожаловать!'}
        buttonName={'Зарегистрироваться'}
        buttonClassName={`register-form__button ${isDisabled
          ? 'auth-form__form-button_disabled'
          : ''}
       `}
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
          type='text'
          value={values.name}
          onChange={handleChange}
          minLength='2'
          maxLength='30'
          required
          name='name'
          errorMessage={errors.name}
        />
        <Input
          label='E-mail'
          placeholder='E-mail'
          type='email'
          value={values.email}
          onChange={handleChange}
          minLength='2'
          maxLength='30'
          required
          name='email'
          errorMessage={errors.email}
        />
        <Input
          label='Пароль'
          placeholder='Пароль'
          type='password'
          value={values.password}
          onChange={handleChange}
          minLength='8'
          maxLength='30'
          required
          name='password'
          errorMessage={errors.password}
        />
      </AuthForm>
    </main>
  )
}
export default Register;