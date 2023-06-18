import React from 'react';
import './Footer.css';

function Footer({ isThin }) {
  return (
    <footer className='footer'>
      <div className={`container${isThin ? '_thin' : ''} footer__container`}>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <nav className='footer__nav'>
            <p className='footer__copyright'>&#169; 2020</p>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='https://practicum.yandex.ru/' target='_blank' className='footer__link'>Яндекс.Практикум</a>
            </li>
            <li className='footer__item'>
              <a href='https://github.com/LiliaKhazieva' target='_blank' className='footer__link'>Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;