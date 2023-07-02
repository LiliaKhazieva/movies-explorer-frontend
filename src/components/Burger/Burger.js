import burgerImg from '../../images/burger.svg';
import burgerCloseImg from '../../images/closed-icon.svg';
import './Burger.css';

function Burger({
  isVisible,
  onClick,
}) {
  return (
    <div onClick={onClick}>
      {isVisible ? (
        <img src={burgerCloseImg} alt='burger close' className='burger burger__close' />
      ) : (
        <img src={burgerImg} alt='burger show' className='burger' />
      )}
    </div>
  )
}

export default Burger;