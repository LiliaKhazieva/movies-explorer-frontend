import React, { useState } from 'react';
import SearchFormCheckbox from '../SearchFormCheckbox/SearchFormCheckbox';
import './SearchForm.css';

function SearchForm({ searchQuery, onSearchQueryChange, isShort, onIsShortChange, onSearch }) {
  const [emptyInputError, setEmptyInputError] = useState(false);

  const onSearchClick = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setEmptyInputError(true);
    } else {
      setEmptyInputError(false);
      onSearch(searchQuery);
    }
  }

  const onInputChange = (e) => {
    onSearchQueryChange(e.target.value);
    setEmptyInputError(false);
  }

  return (
    <section className='search'>
      <form className='search-form'>
        <fieldset className='search-form__fieldset'>
          <div className='search-form__input-and-button'>
            <input
              className={
                emptyInputError
                  ? 'search-form__input search-form__input-error'
                  : 'search-form__input'
              }
              type='text'
              placeholder='Фильм'
              value={searchQuery}
              onChange={onInputChange}
              required
            />
            {emptyInputError && (
              <div className='search-form__input-is-error'>
                <p className='search-form__input-error-text'>
                  Нужно ввести ключевое слово
                </p>
              </div>
            )}
            <button className='search-form__button' onClick={onSearchClick}>Найти</button>
          </div>
          <SearchFormCheckbox value={isShort} onClick={() => onIsShortChange(!isShort)} />
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;