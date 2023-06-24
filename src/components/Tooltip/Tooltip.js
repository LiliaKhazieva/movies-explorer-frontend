import React, { useEffect } from 'react';
import './Tooltip.css';

function Tooltip({ isOpen, message, onClose }) {

  useEffect(() => {
    if (isOpen) {
      setTimeout(onClose, 5000)
    }
  }, [isOpen])

  return (
    <div className={`tooltip ${isOpen ? 'tooltip_active' : ''}`}>
      <p>{message}</p>
      <button className='tooltip__button' onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default Tooltip;