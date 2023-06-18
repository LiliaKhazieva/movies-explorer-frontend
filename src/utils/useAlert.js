import React, { useState } from 'react';

export function useAlert() {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Произошла неизвестная ошибка');

  return {
    isAlertActive,
    setIsAlertActive,
    alertMessage,
    setAlertMessage,
  }
}