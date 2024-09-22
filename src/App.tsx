import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CardContainer from './components/card-container/Card-container';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header title={'qpick'} />
      <main>
        <Routes>
          <Route path="/home" element={<CardContainer title={'Наушники'} />} />
          <Route path="/cart" element={<Cart title={'Корзина'} />} />
          <Route path="*" element={<CardContainer title={'Наушники'} />} />
        </Routes>
        <Outlet />
      </main>
      <Footer title={'qpick'} />
    </Router>
  );
}

export default App;
