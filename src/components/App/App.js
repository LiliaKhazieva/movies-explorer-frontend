import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import auth from '../../utils/Auth'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Tooltip from '../Tooltip/Tooltip';
import { useWindowResize, transformMovie, filterMovies } from '../../utils';
import './App.css';

function App() {
  // все фильмы и их фильтры
  const [allMovies, setAllMovies] = useState(null);
  const [allMoviesSearchQuery, setAllMoviesSearchQuery] = useState(
    localStorage.getItem('allMoviesSearchQuery') || ''
  );
  const [allMoviesSearchQueryValue, setAllMoviesSearchQueryValue] = useState(
    localStorage.getItem('allMoviesSearchQuery') || ''
  );
  const [allMoviesIsShort, setAllMoviesIsShort] = useState(
    JSON.parse(localStorage.getItem('allMoviesIsShort')) || false
  );

  // сохраненные фильмы и их фильтры
  const [savedMovies, setSavedMovies] = useState(null);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState('');
  const [savedMoviesSearchQueryValue, setSavedMoviesSearchQueryValue] = useState('');
  const [savedMoviesIsShort, setSavedMoviesIsShort] = useState(false);

  // пользовательская информация и авторизованность
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  // состояния загрузки
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // состояния тултипа
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [isTooltipMessage, setIsTooltipMessage] = useState('');
  
  // следим за изменением ширины окна браузера
  const { windowSize } = useWindowResize();

  const navigate = useNavigate();

  // загрузка фильмов
  useEffect(() => {
    // если был введен поисковый запрос, то берем фильмы из хранилища
    if (!allMovies && allMoviesSearchQuery.length > 0 && isLoggedIn) {
      if ('allMovies' in localStorage) {
        setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
        setAllMoviesSearchQuery(localStorage.getItem('allMoviesSearchQuery'));
        setAllMoviesIsShort(JSON.parse(localStorage.getItem('allMoviesIsShort')));
      } else {
        setIsLoadingMovies(true);
        moviesApi.getMovies()
          .then((movies) => {
            setAllMovies(movies);
            localStorage.setItem('allMovies', JSON.stringify(movies));
          })
          .catch(err => console.error(err))
          .finally(() => {
            setIsLoadingMovies(false);
          })
      }
    }
  }, [isLoggedIn, allMovies, allMoviesSearchQuery, allMoviesIsShort])

  // загрузка сохраненных фильмов
  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      mainApi.getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false))
    }
  },[isLoggedIn])

  // регистрируем нового пользователя
  const handleRegister = ({ name, email, password }) => {
    auth.register(name, email, password)
      .then(() => {
        navigate('/signin');
      }).catch((err) => {
        console.error(`Ошибка: ${err}`);
        if (err === 409) {
          setIsTooltipMessage('Пользователь с таким email уже существует');
        }
        if (err === 500) {
          setIsTooltipMessage('При регистрации пользователя произошла ошибка');
        }
        setIsOpenTooltip(true);
      });
  }

  // авторизуем пользователя
  const handleLogin = ({ email, password }) => {
    auth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          handleCheckToken();
        }
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
        if (err === 401) {
          setIsTooltipMessage('Вы ввели неправильный логин или пароль');
        }
        if (err === 400) {
          setIsTooltipMessage('Пользователя с такой почтой не существует');
        }
        if (err === 500) {
          setIsTooltipMessage('При авторизации произошла ошибка');
        }
        setIsOpenTooltip(true);
      })
  };

  // проверяем существующий токен
  const handleCheckToken = useCallback(() => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      auth
        .checkToken(jwt)
        .then((res) => {
          const { _id, name, email } = res;
          setIsLoggedIn(true);
          setCurrentUser({ _id, name, email });
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
          if (err === 401) {
            handleLogOut();
          }
        })
        .finally(() => {
          setIsTokenChecked(true);
        })
    } else {
      handleLogOut();
    }
  }, []);

  // изменяем информацию профиля пользователя
  const handleEditProfile = ({ name, email}) => {
    mainApi.editProfile(name, email)
      .then((user) => {
        setCurrentUser(user)
        setIsOpenTooltip(true);
        setIsTooltipMessage('Данные изменены')
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
        if (err === 409) {
          setIsTooltipMessage('Пользователь с таким email уже существует');
        }
        if (err === 500) {
          setIsTooltipMessage('При авторизации произошла ошибка');
        }
        setIsOpenTooltip(true);
      })
  }

  // выходим из профиля
  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('allMoviesSearchQuery');
    localStorage.removeItem('allMoviesIsShort');
    setAllMovies(null);
    setAllMoviesSearchQuery('');
    setAllMoviesSearchQueryValue('');
    setAllMoviesIsShort(false);
    setSavedMovies(null);
    setSavedMoviesSearchQuery('');
    setSavedMoviesSearchQueryValue('');
    setSavedMoviesIsShort(false);
    setIsLoggedIn(false);
    setCurrentUser({
      _id: '',
      name: '',
      email: '',
    });
  };

  // сохраняем фильм
  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(transformMovie(movie))
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => console.error(err));
  }

  // удаляем сохраненный фильм
  const handleRemoveMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => item._id !== movie._id));
      })
      .catch((err) => console.error(err));
  }

  // инициируем проверку токена при загрузке приложения
  useEffect(() => {
    handleCheckToken();
  }, []);

  // сохраняем поисковые параметры в хранилище
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('allMoviesSearchQuery', allMoviesSearchQuery);
      localStorage.setItem('allMoviesIsShort', JSON.stringify(allMoviesIsShort));
    }
  }, [isLoggedIn, allMoviesSearchQuery, allMoviesIsShort]);


  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className='page'>
        <Routes>
          <Route path='/' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </>
          }
          />
          <Route
            path='/movies'
            element={
              isTokenChecked && (
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    movies={filterMovies({
                      movies: allMovies,
                      searchQuery: allMoviesSearchQuery,
                      isShort: allMoviesIsShort,
                    })}
                    savedMovies={savedMovies}
                    windowSize={windowSize}
                    onSearchQueryChange={setAllMoviesSearchQuery}
                    onSearchQueryValueChange={setAllMoviesSearchQueryValue}
                    searchQuery={allMoviesSearchQueryValue}
                    moviesIsShort={allMoviesIsShort}
                    onMoviesIsShortChange={setAllMoviesIsShort}
                    isLoading={isLoadingMovies}
                    onSaveMovie={handleSaveMovie}
                    onRemoveMovie={handleRemoveMovie}
                  />
                </ProtectedRoute>
              )
            }
          />
          <Route
            path='/saved-movies'
            element={
              isTokenChecked && (
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    movies={filterMovies({
                      movies: savedMovies,
                      searchQuery: savedMoviesSearchQuery,
                      isShort: savedMoviesIsShort,
                    })}
                    searchQuery={savedMoviesSearchQueryValue}
                    onSearchQueryChange={setSavedMoviesSearchQuery}
                    onSearchQueryValueChange={setSavedMoviesSearchQueryValue}
                    moviesIsShort={savedMoviesIsShort}
                    onMoviesIsShortChange={setSavedMoviesIsShort}
                    isLoading={isLoading}
                    onRemoveMovie={handleRemoveMovie}
                  />
                </ProtectedRoute>
              )
            }
          />
          <Route
            path='/profile'
            element={
              isTokenChecked && (
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onProfile={handleEditProfile}
                    handleLogOut={handleLogOut}
                  />
                </ProtectedRoute>
              )
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                onLogin={handleLogin}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                onRegister={handleRegister}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Tooltip
          isOpen={isOpenTooltip}
          message={isTooltipMessage}
          onClose={() => setIsOpenTooltip(false)}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
