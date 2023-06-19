import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__container container'>
        <Link to='/' className='header__logo'><img className='header__image' src={logo} alt='Логотип'/></Link>
        <nav className='header__nav'>
          <NavLink to='/signup' className='header__nav-link'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__nav-link header__nav-link_active'>Войти</NavLink>
        </nav>
      </div>
    </header>
  )
}
export default Header;