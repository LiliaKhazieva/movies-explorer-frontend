import React, { useState } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logoMovie.svg';
import icon from '../../images/icon__men-account.svg'
import Burger from '../Burger/Burger';

function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header className='movies__header'>
      <div className='container movies__header-container'>
        <Link to='/' className='movies__header-link'><img className='movies__header-logo' src={logo} alt='Логотип'/></Link>
        <Burger
          isVisible={isMenuVisible}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
        <div className={`overlay ${isMenuVisible ? 'overlay_active' : ''}`} />
        <div className={`movies__header-menu ${isMenuVisible ? 'movies__header-menu_active' : ''}`}>
          <nav className='movies__header-nav'>
            <NavLink
              to='/'
              className={({ isActive }) => `movies__link-films movies__link-home ${isActive ? 'movies__link_active' : ''}`}
            >Главная</NavLink>
            <NavLink
              to='/movies'
              className={({ isActive }) => `movies__link-films ${isActive ? 'movies__link_active' : ''}`}
            >Фильмы</NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) => `movies__link-films ${isActive ? 'movies__link_active' : ''}`}
            >Сохраненные фильмы</NavLink>
          </nav>
          <NavLink
            to='/profile'
            className='movies__account-link'
          >
            <img className='movies__account-icon' src={icon} alt='Icon'/>
            Аккаунт
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navigation;