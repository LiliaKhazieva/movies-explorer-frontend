import React, { useEffect } from 'react'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCard from './MoviesCard/MoviesCard';
import Alert from '../Alert/Alert';
import { useAlert } from '../../utils/useAlert';
import { usePreloader } from '../../utils/usePreloader';
import './Movies.css'
import Preloader from '../Preloader/Preloader';

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
      <section className='movies'>
        <div className='container_thin movies__container'>
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
      </section>
      <Footer isThin />
    </>
  )
}

export default Movies;