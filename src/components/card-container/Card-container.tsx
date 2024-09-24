import * as React from 'react';
import './Card-container.css';
import Card from '../card/Card';
import { Product, ProductService } from '../../services/ProductsService';
import { useEffect, useState } from 'react';
import { CartProductService } from '../../services/CartProductsService';

interface ICardContainerProps {
  category: string;
}

const CardContainer: React.FC<ICardContainerProps> = ({}) => {
  const cartProductService = new CartProductService();

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productService = new ProductService();
      const loadedProducts = await productService.getProducts();
      setProducts(loadedProducts);
    };
    loadProducts();
  }, []);

  const categories = ['Наушники', 'Мобильные телефоны', 'Планшеты', 'Телевизоры'];

  return (
    <>
      {
        categories.map(category => (
          <section className='card-container'>

            <h3 className='card-container__category' key={category}>{category}</h3>

            <div className='card-container-cards'>       
              {
                products
                  .filter(product => product.category === category)
                  .map(product => (
                    <Card
                      key={product.id}
                      title={product.title}
                      oldPrice={1234}
                      newPrice={product.price}
                      currency={product.currency}
                      grade={product.rate}
                      img={product.img}
                      onClick={() => {
                        cartProductService.addCartProduct(product);
                        console.log(product);
                        cartProductService.increaseCount();
                        console.log(cartProductService.count);
                        // setCount(prevCount => prevCount + 1);
                      }                      
                    }
                    />
                  )
                )
              }
            </div>          
          </section>
        ))
      }
    </>
  );
};

export default CardContainer;