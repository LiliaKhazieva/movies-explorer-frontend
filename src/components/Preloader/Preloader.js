import React from 'react'
import './Preloader.css'

function Preloader({
  children,
  text = 'Загрузка...',
  isLoading,
})  {

  return isLoading ? (
    <div className='preloader'>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
      {text}
    </div>
  ) : children;
}

export default Preloader;