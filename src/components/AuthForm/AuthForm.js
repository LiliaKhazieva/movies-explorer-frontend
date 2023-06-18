import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';
import './AuthForm.css'

function AuthForm({ title, name, buttonName, buttonClassName = '', children, description }) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    console.log('submit')
    setSubmitted(true);
  }

  return (
    <section className='auth-form'>
      <Link to='/' className='auth-form__link'><img className='auth-form__logo' src={logo} alt='Логотип'/></Link>
      <h2 className='auth-form__title'>{title}</h2>
      <form
        name={name}
        className={`auth-form__form ${submitted ? 'auth-form__form--submitted' : ''}`}
      >
        {children}
        <button
          type='submit'
          className={`auth-form__form-button ${buttonClassName}`}
          onSubmit={onSubmit}
        >
          {buttonName}
        </button>
        {description}
      </form>
    </section>
  )
}
export default AuthForm;