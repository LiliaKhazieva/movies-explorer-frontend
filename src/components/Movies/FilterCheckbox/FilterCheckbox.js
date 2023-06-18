import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
  value,
  onClick,
}) {
  return (
    <div className='search-form__switch-and-text'>
      <div
        className={`search-form__switch ${value ? 'active' : ''}`}
        onClick={onClick}
      />
      <p className='search-form__short-movies-text'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;