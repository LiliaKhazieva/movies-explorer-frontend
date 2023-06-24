import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {

  // Неавторизованный пользователь
  const headerIsLoggedIn = (
    <>
      <div className='header__container container'>
        <Link to='/' className='header__logo'><img className='header__image' src={logo} alt='Логотип'/></Link>
        <nav className='header__nav'>
          <NavLink to='/signup' className='header__nav-link'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__nav-link header__nav-link_active'>Войти</NavLink>
        </nav>
      </div>
    </>
  );

  // Авторизованный
  const headerIsLoggedInActive = (
    <>
      <Navigation isLight />
      {/*<Link to='/' className='header__logo'><img className='header__image' src={logo} alt='Логотип'/></Link>*/}
      {/*<nav className='header__nav'>*/}
      {/*  <NavLink to='/movies' className='header__nav-link'>Фильмы</NavLink>*/}
      {/*  <NavLink to='/saved-movies' className='header__nav-link'>Сохраненные фильмы</NavLink>*/}
      {/*  <NavLink to='/profile' className='header__nav-link'>Аккаунт</NavLink>*/}
      {/*</nav>*/}
    </>
  );

  return (
    <header className='header'>
        {isLoggedIn ? headerIsLoggedInActive : headerIsLoggedIn}
    </header>
  )
}
export default Header;