import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className='page'>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
          />
          <Route path='/movies' element ={<Movies />}
          />
          <Route path='/saved-movies' element ={<SavedMovies />}
          />
          <Route path='/profile' element ={<Profile />}
          />
          <Route path='/signin' element ={<Login />}
          />
          <Route path='/signup' element ={<Register />}
          />
          <Route path='*' element ={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
