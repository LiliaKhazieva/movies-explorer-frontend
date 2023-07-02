import React, { useEffect } from 'react'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCard from './MoviesCard/MoviesCard';
import Alert from '../Alert/Alert';
import { useAlert } from '../../utils/useAlert';
import { usePreloader } from '../../utils/usePreloader';
import Preloader from '../Preloader/Preloader';
import './Movies.css'

function Movies() {
  const {
    isLoading,
  } = usePreloader();
  const {
    isAlertActive,
    setIsAlertActive,
    alertMessage,
    setAlertMessage,
  } = useAlert();

  useEffect(() => {
    setAlertMessage('Ошибка при загрузке списка фильмов');
    setIsAlertActive(true);
  }, [])

  const onFavoriteClick = () => {
    console.log('onFavoriteClick')
  }

  return (
    <>
      <Alert
        isActive={isAlertActive}
        message={alertMessage}
        onClose={() => setIsAlertActive(false)}
      />
      <Navigation />
      <main className='movies'>
        <div className='movies__container container-thin'>
          <h1 className='movies__title-hidden'>Movies</h1>
          <SearchForm />
          <Preloader
            isLoading={isLoading}
            text='Загрузка списка фильмов...'
          >
            <MoviesCardList>
              <MoviesCard isFavorite onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
              <MoviesCard onFavoriteClick={onFavoriteClick} />
            </MoviesCardList>
          </Preloader>
          <button className='movies__more-btn'>Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Movies;