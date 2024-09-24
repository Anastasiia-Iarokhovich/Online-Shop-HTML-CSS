import * as React from 'react';
import './Cart.css';
import CartConfirm from '../cart-confirm/Cart-confirm';
import CartItem from '../cart-item/Cart-item';
import { CartProductService } from '../../services/CartProductsService';
import { useEffect, useState } from 'react';
import Product from '../../models/ProductInterface';

interface ICartProps {
  title: string;
}

const Cart: React.FC<ICartProps> = ({ }) => {

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const cartProductService = new CartProductService();

  useEffect(() => {
    const loadProducts = async () => {
      const cartProductService = new CartProductService();
      const loadedProducts = await cartProductService.getCartProducts();
      setCartProducts(loadedProducts);
    };
    loadProducts();
  }, []);

  return (
    <section className='cart'>

      <h3 className='cart__title'>Корзина</h3>

      <div className='cart__content'>
        {cartProducts?.length > 0 ? (
          <div className='cart__content-products' >
          {
            cartProducts.map((cartProduct) => (
              <CartItem
                key={cartProduct.id}
                title={cartProduct.title}
                price={cartProduct.price}
                currency={cartProduct.currency}
                image={cartProduct.img} 
                onClick={
                  () => {
                    cartProductService.deleteCartProduct(cartProduct.id);
                    // setCount(count - 1);
                    // setCartProducts([...cartProducts, cartProduct]); 
                  }
                }            
              />
            ))
          }
        </div> ) : (
          <p>Ваша корзина пуста.</p>
        )}
        
        <CartConfirm price={1000} currency={'₽'}/>
      </div>
      
    </section>
  );
};

export default Cart;