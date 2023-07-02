import React from 'react';
import './Promo.css';
import circle from '../../../images/text__COLOR_landing-logo.png';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container container'>
        <div className='promo__text'>
          <h1 className='promo__text-title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__text-caption'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button type='button' className='promo__text-btn' onClick={() => window.location.href='#about'}>
            Узнать больше
          </button>
        </div>
        <img className='promo__text-img' src={circle} alt='Circle' />
      </div>
    </section>
  );
}