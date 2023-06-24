import React from 'react';
import Preloader from '../Preloader/Preloader';

export function MoviesWrapper({
  movies,
  children,
  isLoading,
  searchQuery,
}) {
  // изначально, до поиска, ничего не отображаем
  if (!movies) return null;

  return (
    <Preloader
      isLoading={isLoading}
      text='Загрузка списка фильмов...'
    >
      {movies.length === 0 && searchQuery.length > 0 ? (
        <p className='movies__notfound'>Ничего не найдено</p>
      ) : children}
    </Preloader>
  )
}