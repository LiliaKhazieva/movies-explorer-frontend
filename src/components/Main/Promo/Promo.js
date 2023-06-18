import React from 'react';
import './Promo.css';
import circle from '../../../images/text__COLOR_landing-logo.png';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='container promo__container'>
        <div className='promo__text'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__caption'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button type='button' className='promo__btn' onClick={() => location.href='#about'}>
            Узнать больше
          </button>
        </div>
        <img className='promo__img' src={circle} alt='Circle' />
      </div>
    </section>
  );
}