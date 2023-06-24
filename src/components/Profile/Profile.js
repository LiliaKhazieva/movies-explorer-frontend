import React, { useContext, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css';

function Profile({ onProfile, handleLogOut }) {
  const { values, errors, isValid, handleChange, setValues } = useFormAndValidation(false);
  const { currentUser } = useContext(CurrentUserContext);

  const isDisabled = !isValid || (values.name === currentUser.name && values.email === currentUser.email);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  function handleSubmit(e) {
    e.preventDefault();
    onProfile(values);
  }

  return (
    <>
      <Navigation />
      <section className='profile'>
        <h1 className="profile__title">Привет, { currentUser.name }!</h1>
        <form
          className='profile__form'
          onSubmit={handleSubmit}
        >
          <div className='profile__form-row'>
            <label>Имя</label>
            <input
              id='profile__input-name'
              type='text'
              className={
                errors.name
                  ? 'profile__form-input profile__form-input_error'
                  : 'profile__form-input'
              }
              placeholder='Введите имя'
              onChange={handleChange}
              value={values.name || ''}
              name='name'
              minLength='2'
              maxLength='30'
              required
            />
            <span className='profile__error'>{errors.name}</span>
          </div>
          <div className='profile__form-row'>
            <label>E-mail</label>
            <input
              type="email"
              className={
                errors.email
                  ? 'profile__form-input profile__form-input_error'
                  : 'profile__form-input'
              }
              placeholder='Введите email'
              onChange={handleChange}
              value={values.email || ''}
              pattern='^.+@.+\..+$'
              name='email'
              minLength='2'
              maxLength='30'
              required
            />
            <span className='profile__error'>{errors.email}</span>
          </div>
          <div className='profile__bottom'>
            <button
              type='submit'
              onClick={handleSubmit}
              disabled={isDisabled}
              className={`profile__bottom-edit ${isDisabled
                ? 'profile__bottom-edit_disabled'
                : ''}
              `}
            >Редактировать</button>
            <button className='profile__logout' onClick={handleLogOut}>Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;