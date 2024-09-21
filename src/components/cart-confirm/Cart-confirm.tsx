import * as React from 'react';
import './Cart-confirm.css';

interface ICartConfirmProps {
  price: number;
  currency: string;
}

const CartConfirm: React.FC<ICartConfirmProps> = ({ price, currency }) => {
  return (
    <div className='cart-confirm'>

      <div className="cart-confirm__text">
        <p className="cart-confirm__text-total">итого</p>
        <p className="cart-confirm__text-sum"> {currency} {price}</p>
      </div>

      <a href="#" className="cart-confirm__btn">Перейти к оформлению</a>

    </div>
  );
};

export default CartConfirm;