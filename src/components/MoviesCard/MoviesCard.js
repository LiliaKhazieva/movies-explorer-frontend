import React from 'react';
import { baseMoviesApiUrl, timeFormat } from '../../utils';
import './MoviesCard.css';

function MoviesCard({
  info,
  isFavorite,
  onDeleteClick,
  onFavoriteClick,
}) {
  const renderRemoveBtn = () => {
    return (
      <button
        className='movies-cards__save-btn movies-cards__delete-btn'
        onClick={onDeleteClick}
      />
    )
  }

  const renderSaveBtn = () => {
    return isFavorite ? (
      <button
        className='movies-cards__save-btn-active'
        type='button'
        onClick={() => onFavoriteClick(false)}
      ></button>
    ) : (
      <button
        className='movies-cards__save-btn'
        type='button'
        onClick={() => onFavoriteClick(true)}
      >Сохранить</button>
    )
  }

  return (
    <>
      <li className='movies-cards__item'>
        {onDeleteClick && renderRemoveBtn()}
        {onFavoriteClick && renderSaveBtn()}
        <a href={info.trailerLink} target='_blank' className='movies-cards__trailer-link link'>
          <img className='movies-cards__image' alt='Movie' src={info.image.url ? baseMoviesApiUrl + info.image.url : info.image} />
        </a>
        <div className='movies-cards__description'>
          <div className='movies-cards__description-container'>
            <h2 className='movies-cards__title'>{info.nameRU}</h2>
            <p className='movies-cards__duration'>{timeFormat(info.duration)}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;