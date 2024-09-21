import * as React from 'react';
import './Footer.css';

interface IFooterProps {
  title: string;
}


const Footer: React.FC<IFooterProps> = ({ title }) => {
  return (
    <footer className='footer'>
       
      <h1 className='footer__title'>{title}</h1>

      <div className='footer__menu-col-1'>
        <p className='footer__menu-col-1-item'>Избранное</p>
        <p className='footer__menu-col-1-item'>Корзина</p>
        <p className='footer__menu-col-1-item'>Контакты</p>
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
      <a href='#'>
            <img className='footer__icons-icon' src='images/vk.png' alt='vk'/>
        </a>
        <a href='#'>
            <img className='footer__icons-icon' src='images/telegram.png' alt='telegram'/>
        </a>
        <a href='#'>
            <img className='footer__icons-icon' src='images/whatsup.png' alt='whatsup'/>
        </a>
      </div>

    </footer>
  );
};

export default Footer;