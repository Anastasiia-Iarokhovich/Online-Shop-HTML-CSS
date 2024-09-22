import * as React from 'react';
import './Card-container.css';
import Card from '../card/Card';
import { Product, ProductService } from '../../services/Product';
import { useEffect, useState } from 'react';

interface ICardContainerProps {
  category: string;
}

const CardContainer: React.FC<ICardContainerProps> = ({ category: title}) => {

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