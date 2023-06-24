import React from 'react';
import './MoviesCardList.css';

function MoviesCardList({
  children,
}) {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        {children}
      </ul>
    </section>
  );
}

export default MoviesCardList;