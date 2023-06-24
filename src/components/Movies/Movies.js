import React, { useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './Movies.css'
import { MoviesWrapper } from '../MoviesWrapper/MoviesWrapper';

function Movies({
  movies,
  savedMovies,
  windowSize,
  isLoading,
  onSearchQueryChange,
  moviesIsShort,
  onMoviesIsShortChange,
  onSaveMovie,
  onRemoveMovie,
  searchQuery,
  onSearchQueryValueChange,
}) {
  const [moviesCount, setMoviesCount] = useState(0);

  // устанавливаем изначальное количество фильмов для вывода
  useEffect(() => {
    if (windowSize > 900) {
      setMoviesCount(12);
    } else if (windowSize > 650) {
      setMoviesCount(8);
    } else {
      setMoviesCount(5);
    }
  }, [windowSize]);

  // логика работы кнопки "еще"
  const showMoreMovies = () => {
    if (windowSize > 900) {
      setMoviesCount(moviesCount + 3);
    } else {
      setMoviesCount(moviesCount + 2);
    }
  };

  // условие отображения кнопки "еще"
  const isShowMoreMoviesVisible = () => {
    return movies !== null && moviesCount < movies.length
  };

  const onSearchClick = () => {
    onSearchQueryChange(searchQuery);
  }

  return (
    <>
      <Navigation />
      <main className='movies'>
        <div className='container movies__container'>
          <h1 className='movies__title-hidden'>Movies</h1>
          <SearchForm
            searchQuery={searchQuery}
            onSearchQueryChange={onSearchQueryValueChange}
            isShort={moviesIsShort}
            onIsShortChange={onMoviesIsShortChange}
            onSearch={onSearchClick}
          />
          <MoviesWrapper
            movies={movies}
            isLoading={isLoading}
            searchQuery={searchQuery}
          >
            <>
              <MoviesCardList>
                {movies && savedMovies && movies.slice(0, moviesCount).map((movie, index) => {
                  const savedMovie = savedMovies.find(item => item.movieId === movie.id);
                  return (
                    <MoviesCard
                      info={movie}
                      isFavorite={!!savedMovie}
                      onFavoriteClick={(isFavorite) => isFavorite ? onSaveMovie(movie) : onRemoveMovie(savedMovie)}
                      key={index}
                    />
                  )
                })}
              </MoviesCardList>
              {isShowMoreMoviesVisible() && <button className='movies__more-btn' onClick={showMoreMovies}>Ещё</button>}
            </>
          </MoviesWrapper>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Movies;