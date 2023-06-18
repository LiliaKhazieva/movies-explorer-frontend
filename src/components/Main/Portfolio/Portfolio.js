import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className="container">
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a href='https://github.com/LiliaKhazieva/how-to-learn' target='_blank' className='portfolio__link'>
              <p className='portfolio__text'>Статичный сайт</p>
              <div className='portfolio__icon'></div>
            </a>
          </li>
          <li className='portfolio__item'>
            <a href='https://github.com/LiliaKhazieva/russian-travel' className='portfolio__link'>
              <p className='portfolio__text'>Адаптивный сайт</p>
              <div className='portfolio__icon'></div>
            </a>
          </li>
          <li className='portfolio__item'>
            <a href='https://github.com/LiliaKhazieva/react-mesto-api-full-gha' className='portfolio__link'>
              <p className='portfolio__text'>Одностраничное приложение</p>
              <div className='portfolio__icon'></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;