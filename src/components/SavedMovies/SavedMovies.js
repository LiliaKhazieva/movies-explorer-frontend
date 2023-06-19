import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import './SavedMovies.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

function SavedMovies() {
  const onDeleteClick = () => {
    console.log('onDeleteClick')
  }

  return (
    <>
      <Navigation />
      <section className='saved-movies'>
        <h1 className='saved-movies__title-hidden'>Movies</h1>
        <div className='container_thin saved-movies__container'>
          <SearchForm />
          <MoviesCardList>
            <MoviesCard onDeleteClick={onDeleteClick} />
            <MoviesCard onDeleteClick={onDeleteClick} />
            <MoviesCard onDeleteClick={onDeleteClick} />
          </MoviesCardList>
        </div>
      </section>
      <Footer isThin />
    </>
  );
}

export default SavedMovies;