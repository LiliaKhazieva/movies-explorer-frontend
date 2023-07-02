import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
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

export default FilterCheckbox;