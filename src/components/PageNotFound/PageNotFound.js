import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='notfound'>
      <h2 className='notfound__title'>404</h2>
      <p className='notfound__subtitle'>Страница не найдена</p>
      <Link to='/' className='notfound__back'>Назад</Link>
    </div>
  )
}

export default PageNotFound;