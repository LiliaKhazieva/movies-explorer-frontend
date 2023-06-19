import React, { useState } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';
import icon from '../../images/icon__men-account.svg'
import Burger from '../Burger/Burger';

function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className='movies-header'>
      <div className='movies-header__container container'>
        <Link to='/' className='movies-header__link'><img className='movies-header__logo' src={logo} alt='Логотип'/></Link>
        <Burger
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
            className='movies-header__account-link'
          >
            <img className='movies-header__account-icon' src={icon} alt='Icon'/>
            Аккаунт
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navigation;