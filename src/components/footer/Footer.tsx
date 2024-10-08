import * as React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface IFooterProps {
  title: string;
}

const Footer: React.FC<IFooterProps> = ({ title }) => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleShopClick = () => {
    navigate('/');
  };

  const toggleBurger = () => {
    setBurgerActive(!isBurgerActive);
  };

  return (
    <footer className='footer'>
       
      <h1 className='footer__title' onClick={handleShopClick}>{title}</h1>

      <div className='footer__menu-col-1'>
        <p className='footer__menu-col-1-item'>Избранное</p>
        <p className='footer__menu-col-1-item' onClick={handleCartClick}>Корзина</p>
        <p  className='footer__menu-col-1-item' onClick={() => alert('+123 456 789')}>Контакты</p>
      </div>

      <div className='footer__menu-col-2'>
        <p className='footer__menu-col-2-item'>Условия сервиса</p>

        <div className='footer__menu-col-2-language'>
            <span className="footer__menu-col-2-language-icon material-symbols-outlined">
                language
            </span>
            <span className='footer__menu-col-2-language-option'>Рус</span>
            <span className='footer__menu-col-2-language-option'>Eng</span>
        </div>      
      </div>



      <div className='footer__icons'>
        <span className={`footer__icons-icon material-symbols-outlined${isBurgerActive ? ' burger-active' : ''}`}  id='burger' onClick={toggleBurger}>
          menu
          <div className='footer__icons-burger-menu'>
            <p >Избранное</p>
            <p onClick={handleCartClick}>Корзина</p>
            <p onClick={() => alert('+123 456 789')}>Контакты</p>
            <p >Условия сервиса</p>
            <div className='footer__menu-col-2-language'>
              <span className="footer__menu-col-2-language-icon material-symbols-outlined">
                  language
              </span>
              <span className='footer__menu-col-2-language-option'>Рус</span>
              <span className='footer__menu-col-2-language-option'>Eng</span>
            </div>  
          </div>
        </span>

        

        <a href='https://vk.com'>
          <img className='footer__icons-icon' src='images/vk.png' alt='vk'/>
        </a>
        <a href='https://telegram.org'>
          <img className='footer__icons-icon' src='images/telegram.png' alt='telegram'/>
        </a>
        <a href='https://www.whatsapp.com'>
          <img className='footer__icons-icon' src='images/whatsup.png' alt='whatsup'/>
        </a>
      </div>

    </footer>
  );
};

export default Footer;