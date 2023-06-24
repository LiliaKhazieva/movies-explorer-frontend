import React, { useState } from 'react';
import './Navigation.css';
import { Link, Navigate, NavLink } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';
import iconBlack from '../../images/icon__men-account.svg'
import iconWhite from '../../images/icon__COLOR_font-white.svg'
import Burger from '../Burger/Burger';

function Navigation({ isLight }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className={`movies-header ${isLight ? 'movies-header_light' : ''}`}>
      <div className='movies-header__container container'>
        <Link to='/' className='movies-header__link'><img className='movies-header__logo' src={logo} alt='Логотип'/></Link>
        <Burger
          isLight={isLight}
          isVisible={isMenuVisible}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
        <div className={`overlay ${isMenuVisible ? 'overlay_active' : ''}`} />
        <div className={`movies-header__menu ${isMenuVisible ? 'movies-header__menu_active' : ''}`}>
          <nav className='movies-header__nav'>
            <NavLink
              to='/'
              className={({ isActive }) => `movies-header__nav-link movies-header__nav-link-home ${isActive ? 'movies-header__nav-link_active' : ''}`}
            >Главная</NavLink>
            <NavLink
              to='/movies'
              className={({ isActive }) => `movies-header__nav-link  ${isActive ? 'movies-header__nav-link_active' : ''}`}
            >Фильмы</NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) => `movies-header__nav-link ${isActive ? 'movies-header__nav-link_active' : ''}`}
            >Сохраненные фильмы</NavLink>
          </nav>
          <NavLink
            to='/profile'
            className={`movies-header__account-link ${isLight ? 'movies-header__account-link_light' : ''}`}>
            <img className='movies-header__account-icon' src={isLight ? iconWhite : iconBlack} alt='Icon'/>
            Аккаунт
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navigation;