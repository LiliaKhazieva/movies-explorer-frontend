import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchClick = (e) => {
    e.preventDefault();
    console.log('try to search with isShortFilms:', isShortFilms, 'and searchQuery:', searchQuery)
  }

  return (
    <section className='search'>
      <form className='search-form'>
        <fieldset className='search-form__fieldset'>
          <div className='search-form__input-and-button'>
            <input
              className='search-form__input'
              type='text'
              placeholder='Фильм'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button className='search-form__button button' onClick={onSearchClick}>Найти</button>
          </div>
          <FilterCheckbox value={isShortFilms} onClick={() => setIsShortFilms(!isShortFilms)} />
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;