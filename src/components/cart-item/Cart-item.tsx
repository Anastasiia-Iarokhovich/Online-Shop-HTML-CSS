import * as React from 'react';
import './Cart-item.css';

interface ICartItemProps {
  title: string;
  price: number;
  currency: string;
  image: string;
}

const CartItem: React.FC<ICartItemProps> = ({ title, price, currency, image }) => {
  return (
    <div className='cart-item'>

      <div className='cart-item__header'>
        <span className='cart-item__header-icon material-symbols-outlined'>
          delete
        </span>
      </div>

      <div className='cart-item__body'>
        <img src={image} alt='headset' className='cart-item__body-img'/>

        <div className='cart-item__body-text'>
          <h4 className='cart-item__body-text-title'>{title}</h4>
          <p className='cart-item__body-text-price'>{price} {currency}</p>
        </div>

      </div>

      <div className='cart-item__footer'>

        <div className='cart-item__footer-counter'>
          <a href='#' className='cart-item__footer-counter-btn'>-</a>
          <p className='cart-item__footer-counter-num'>1</p>
          <a href='#' className='cart-item__footer-counter-btn'>+</a>
        </div>

        <p className='cart-item__footer-total'>3527 ₽</p>
      </div>
      
    </div>
  );
};

export default CartItem;