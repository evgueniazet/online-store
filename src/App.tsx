import React from 'react';
import './styles/fonts.scss';
import Route from './utils/Route';
import HomePage from './components/Pages/HomePage';
import CheckoutPage from './components/Pages/CheckoutPage';
import ProductPage from './components/Pages/ProductPage';
import CartPage from './components/Pages/CartPage';
import { Sandbox } from './components/Sandbox/Sandbox';

const App = () => {

  return (
    <div>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/sandbox">
        <Sandbox />
      </Route>
    </div>
  );
};

export default App;