import * as React from 'react';
import './Cart.css';
import CartConfirm from '../cart-confirm/Cart-confirm';
import CartItem from '../cart-item/Cart-item';

interface ICartProps {
  title: string;
}

const Cart: React.FC<ICartProps> = ({ title }) => {
  return (
    <section className='cart'>

      <h3 className='cart__title'>Корзина</h3>

      <div className='cart__content'>
        <CartItem title={'Apple BYZ S852I'} price={1000} currency={'₽'} image={'images/img1.png'}/>
        <CartConfirm price={1000} currency={'₽'}/>
      </div>
      
    </section>
  );
};

export default Cart;