import React from 'react';
import './Input.css';

function Input({
  label = '',
  type = 'text',
  placeholder = '',
  required = false,
  minLength = 0,
  maxLength = 999,
  hasError = false,
}) {
  return (
    <div className='input'>
      <label className="input__label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className={`input__field ${hasError ? 'input__field_error' : ''}`}
      />
      {hasError && <span className='input__error'>Что-то пошло не так...</span>}
    </div>
  )
}

export default Input;