import * as React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartProductService } from '../../services/CartProductsService';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const cartProductService = new CartProductService();

  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleShopClick = () => {
    navigate('/');
  };

  const toggleFavorite = () => {
    setIsFavoriteActive(!isFavoriteActive);
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {

  }, [cartProductService]);

  return (
    <header className='header'>
       
      <h1 className='header__title' onClick={handleShopClick}>{title}</h1>
  
      <div className='header__icons'>

        <span className='header__icons-favorite material-symbols-outlined' 
              onClick={toggleFavorite}>
          favorite
        </span>

        <span className={`header__icons-favorite-badge${isFavoriteActive ? ' icons-favorite-active' : ''}`} 
              onClick={toggleFavorite}>1</span>

        <span className='header__icons-cart material-symbols-outlined' 
              onClick={handleCartClick}> 
          shopping_cart
        </span>

        <span className={`header__icons-cart-badge${cartProductService.count > 0 ? ' cart-count-active' : ''}`} >
          {/* {cartProductService.getCount()} */}
          {cartCount}
        </span>
      </div>  

    </header>
  );
};

export default Header;
