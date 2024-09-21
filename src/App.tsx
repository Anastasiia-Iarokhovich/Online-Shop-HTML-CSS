import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import CardContainer from './components/card-container/Card-container';
import CartConfirm from './components/cart-confirm/Cart-confirm';
import CartItem from './components/cart-item/Cart-item';

function App() {
  return (
    <>
      <Header title={'qpick'}/>
      {/* <CardContainer title={'Наушники'} />
      <CardContainer title={'Беспроводные наушники'} /> */}
      {/* <CartConfirm price={1000} currency={'₽'}/> */}
      <CartItem title={'Apple BYZ S852I'} price={1000} currency={'₽'} image={'images/img1.png'}/>
      <Footer title={'qpick'}/>
    </>
  );
}

export default App;
