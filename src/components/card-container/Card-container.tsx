import * as React from 'react';
import './Card-container.css';
import Card from '../card/Card';

interface ICardContainerProps {
  title: string;
}

const CardContainer: React.FC<ICardContainerProps> = ({ title }) => {
  return (
    <section className='card-container'>

        <h3 className='card-container__title'>{title}</h3>

        <div className='card-container-cards'>
            <Card title={'Apple BYZ S852I'} oldPrice={3527} newPrice={2927} currency={'₽'} grade={4.5} img={'images/img1.png'}/>
            <Card title={'Apple BYZ S852I'} oldPrice={3527} newPrice={2927} currency={'₽'} grade={4.5} img={'images/img1.png'}/>
            <Card title={'Apple BYZ S852I'} oldPrice={3527} newPrice={2927} currency={'₽'} grade={4.5} img={'images/img1.png'}/>
            <Card title={'Apple BYZ S852I'} oldPrice={3527} newPrice={2927} currency={'₽'} grade={4.5} img={'images/img1.png'}/>
        </div>
      
    </section>
  );
};

export default CardContainer;