import React, { useEffect } from 'react';
import './Alert.css';

function Alert({
  isActive,
  message,
  onClose,
}) {
  useEffect(() => {
    if (isActive) {
      setTimeout(onClose, 5000)
    }
  }, [isActive])

  return (
    <div className={`alert ${isActive ? 'alert_active' : ''}`}>
      <p>{message}</p>
      <button className='alert__button' onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default Alert;