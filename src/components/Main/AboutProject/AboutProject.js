import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about' id='about'>
      <div className='about__container container'>
        <h2 className='about__title title'>О проекте</h2>
        <div className='about__description'>
          <div>
            <h3 className='about__description-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about__description-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div>
            <h3 className='about__description-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about__description-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about__timeline'>
          <div className='about__timeline-item about__timeline-item_week'>1 неделя</div>
          <div className='about__timeline-item about__timeline-item_weeks'>4 недели</div>
          <div className='about__timeline-item about__timeline-item_opacity'>Back-end</div>
          <div className='about__timeline-item about__timeline-item_opacity'>Front-end</div>
        </div>
      </div>
    </section>
  );
}