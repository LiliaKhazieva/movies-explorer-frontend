import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import AuthFormDescription from '../AuthFormDescription/AuthFormDescription';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import './Login.css'

function Login({ onLogin, isLoggedIn }) {
  const { values, handleChange, isValid, errors } = useFormAndValidation(false);
  let location = useLocation();
  const isDisabled = !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  if (isLoggedIn) {
    return <Navigate to='/movies' state={{ from: location }} replace />;
  }

  return (
    <main className='login'>
      <AuthForm
        disabled={isDisabled}
        onSubmit={handleSubmit}
        title={'Рады видеть!'}
        buttonName={'Войти'}
        buttonClassName={`login__button ${isDisabled
          ? 'auth-form__form-button_disabled'
          : ''}
       `}
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
          value={values.email}
          onChange={handleChange}
          pattern='^.+@.+\..+$'
          minLength='2'
          maxLength='30'
          required
          name='email'
          errorMessage={errors.email}
        />
        <Input
          label='Пароль'
          type='password'
          placeholder='Пароль'
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
export default Login;