import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';
import './AuthForm.css'

function AuthForm({ onSubmit, title, name, buttonName, buttonClassName = '', children, description, isDisabled }) {

  return (
    <section className='auth-form'>
      <Link to='/' className='auth-form__link'><img className='auth-form__logo' src={logo} alt='Логотип'/></Link>
      <h1 className='auth-form__title'>{title}</h1>
      <form
        name={name}
        onSubmit={onSubmit}
        className={`auth-form__form`}
      >
        {children}
        <button
          type='submit'
          className={`auth-form__form-button ${buttonClassName}`}
          onSubmit={onSubmit}
          disabled={isDisabled}
        >
          {buttonName}
        </button>
        {description}
      </form>
    </section>
  )
}
export default AuthForm;