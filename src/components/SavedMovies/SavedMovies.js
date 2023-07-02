import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MoviesWrapper } from '../MoviesWrapper/MoviesWrapper';
import './SavedMovies.css';

function SavedMovies({
  movies,
  isLoading,
  onRemoveMovie,
  moviesIsShort,
  onMoviesIsShortChange,
  searchQuery,
  onSearchQueryChange,
  onSearchQueryValueChange,
}) {
  const onSearchClick = () => {
    onSearchQueryChange(searchQuery);
  }

  return (
    <>
      <Navigation />
      <section className='saved-movies'>
        <h1 className='saved-movies__title-hidden'>Movies</h1>
        <div className='container saved-movies__container'>
          <SearchForm
            searchQuery={searchQuery}
            isShort={moviesIsShort}
            onSearchQueryChange={onSearchQueryValueChange}
            onIsShortChange={onMoviesIsShortChange}
            onSearch={onSearchClick}
          />
          <MoviesWrapper
            movies={movies}
            isLoading={isLoading}
            searchQuery={searchQuery}
          >
            <MoviesCardList>
              {movies && movies.map((movie, index) => (
                <MoviesCard
                  info={movie}
                  onDeleteClick={() => onRemoveMovie(movie)} key={index}
                />
              ))}
            </MoviesCardList>
          </MoviesWrapper>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;