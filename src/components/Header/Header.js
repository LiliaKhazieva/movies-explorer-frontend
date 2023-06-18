import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';

function Header() {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Link to='/' className='header__logo'><img className='header__image' src={logo} alt='Логотип'/></Link>
        <div className='header__nav'>
          <NavLink to='/signup' className='header__link'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__link header__link_active'>Войти</NavLink>
        </div>
      </div>
    </header>
  )
}
export default Header;