import React from 'react';
import './MoviesCard.css';
import Movie from '../../../images/pic__movies-card.png';

function MoviesCard({
  isFavorite,
  onDeleteClick,
  onFavoriteClick,
}) {
  const renderRemoveBtn = () => {
    return (
      <button
        className='movies-cards__save-btn movies-cards__delete-btn'
        onClick={() => onDeleteClick()}
      />
    )
  }

  const renderSaveBtn = () => {
    return isFavorite ? (
      <button
        className='movies-cards__save-btn-active'
        type='button'
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
        <a href='https://www.youtube.com/' target='_blank' className='movies-cards__trailer-link link'>
          {onDeleteClick && renderRemoveBtn()}
          {onFavoriteClick && renderSaveBtn()}
          <img className='movies-cards__image' alt='Movie' src={Movie}/>
        </a>
        <div className='movies-cards__description'>
          <div className='movies-cards__description-container'>
            <h2 className='movies-cards__title'>В погоне за Бенкси</h2>
            <p className='movies-cards__duration'>1ч 17м</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;