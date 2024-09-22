import * as React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleShopClick = () => {
    navigate('/');
  };

  return (
    <header className='header'>
       
      <h1 className='header__title' onClick={handleShopClick}>{title}</h1>
  
      <div className='header__icons'>

        <span className='header__icons-favorite material-symbols-outlined'>
          favorite
        </span>

        <span className='header__icons-cart material-symbols-outlined' onClick={handleCartClick}> 
          shopping_cart
        </span>
      </div>  

    </header>
  );
};

export default Header;