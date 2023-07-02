import React from 'react';
import { Link } from 'react-router-dom';
import './AuthFormDescription.css';

function AuthFormDescription({
  children,
  url,
  label,
}) {
  return (
    <p className='auth-form-description'>
      {children}
      <Link to={url} className='auth-form-description__link'>
        {label}
      </Link>
    </p>
  )
}

export default AuthFormDescription;