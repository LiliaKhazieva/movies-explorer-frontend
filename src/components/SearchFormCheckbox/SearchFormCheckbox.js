import React from 'react';
import './SearchFormCheckbox.css';

function SearchFormCheckbox({
  value,
  onClick,
}) {
  return (
    <div className='search-form__switch-and-text' onClick={onClick}>
      <div
        className={`search-form__switch ${value ? 'active' : ''}`}
      />
      <p className='search-form__short-movies-text'>Короткометражки</p>
    </div>
  )
}

export default SearchFormCheckbox;