import * as React from 'react';
import './Header.css';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <header className='header'>
       
      <h1 className='header__title'>{title}</h1>
  
      <div className='header__icons'>

        <span className='header__icons-favorite material-symbols-outlined'>
          favorite
        </span>

        <span className='header__icons-cart material-symbols-outlined'> 
          shopping_cart
        </span>
      </div>  

    </header>
  );
};

export default Header;