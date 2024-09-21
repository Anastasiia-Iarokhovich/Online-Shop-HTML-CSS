import * as React from 'react';
import './Cart.css';

interface ICartProps {
  title: string;
}

const Cart: React.FC<ICartProps> = ({ title }) => {
  return (
    <section className='cart-item'>

        <h3 className='cart-item__title'>{title}</h3>
      
    </section>
  );
};

export default Cart;