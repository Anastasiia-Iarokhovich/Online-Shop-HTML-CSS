import * as React from 'react';
import './Card.css';

interface ICardProps {
  img: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  currency: string;
  grade: number;
  onClick: () => void;
}

const Card: React.FC<ICardProps> = ({ img, title, oldPrice, newPrice, currency, grade, onClick }) => {
  return (
    <div className='card'>

      <img src={img} alt='headset' className='card__img'/>

      <div className='card__content-top'>

        <h4 className='card__content-top-title'>{title}</h4>

        <div className='card__content-top-price'>
          <p className='card__content-top-price-new'>{newPrice} {currency}</p>
          <p className='card__content-top-price-old'>{oldPrice} {currency}</p>
        </div>
        
      </div>

      <div className='card__content-bottom'>

        <div className='card__content-bottom-grade'>
          <span className='card__content-bottom-grade-icon material-symbols-outlined'>
            grade
          </span>
          <span className='card__content-bottom-grade-note'>{grade}</span>
        </div>

        <a href='#' className='card__content-bottom-button' onClick={onClick}>Купить</a>
      </div>        
    </div>
  );
};

export default Card;