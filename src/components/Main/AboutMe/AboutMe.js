import React from 'react';
import face from '../../../images/pic__COLOR_pic.png';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className="about-me__container container">
        <h2 className='about-me__title title'>Студент</h2>
        <div className='about-me__wrapper'>
          <div className='about-me__text'>
            <h3 className='about-me__text-title'>
              Виталий
            </h3>
            <p className='about-me__caption'>
              Фронтенд-разработчик, 30 лет
            </p>
            <p className='about-me__description'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href='https://github.com/LiliaKhazieva' target='_blank' className='about-me__social'>Github</a>
          </div>
          <img className='about-me__img' src={face} alt='Face'/>
        </div>
      </div>
    </section>
  );
}