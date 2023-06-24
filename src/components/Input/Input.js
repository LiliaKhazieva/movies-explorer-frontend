import React from 'react';
import './Input.css';

function Input({
  label = '',
  type,
  placeholder,
  required,
  minLength = 2,
  maxLength = 30,
  name,
  onChange,
  errorMessage = '',
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
        className='input__field'
        name={name}
        onChange={onChange}
      />
      {!!errorMessage.length && <span className='input__error'>{errorMessage}</span>}
    </div>
  )
}

export default Input;