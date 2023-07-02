import burgerImg from '../../images/burger.svg';
import burgerImgWhite from '../../images/burger-white.svg'
import burgerCloseImg from '../../images/closed-icon.svg';
import './Burger.css';

function Burger({
  isLight,
  isVisible,
  onClick,
}) {
  return (
    <div onClick={onClick}>
      {isVisible ? (
        <img src={burgerCloseImg} alt='burger close' className='burger burger__close' />
      ) : (
        <img src={isLight ? burgerImgWhite : burgerImg} alt='burger show' className='burger' />
      )}
    </div>
  )
}

export default Burger;