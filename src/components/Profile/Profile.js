import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Profile.css';

function Profile() {
  return (
    <>
      <Navigation />
      <section className='profile'>
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className='profile__form'>
          <div className='profile__form-row'>
            <label>Имя</label><input type="text" className='profile__form-input' value='Виталий' />
          </div>
          <div className='profile__form-row'>
            <label>E-mail</label><input type="email" className='profile__form-input' value='pochta@yandex.ru' />
          </div>
          <div className='profile__bottom'>
            <button type='submit' className='profile__bottom-edit'>Редактировать</button>
            <Link to='/' className='profile__logout'>Выйти из аккаунта</Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;