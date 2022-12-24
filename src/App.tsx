import React from 'react';
import styles from './App.module.scss';
import './styles/fonts.scss';
import Route from './utils/Route';
import HomePage from './components/Pages/HomePage';
import CheckoutPage from './components/Pages/CheckoutPage';
import ProductPage from './components/Pages/ProductPage';
import { Sendbox } from './components/Sendbox/Sendbox';

const App = () => {

  return (
    <div className={styles.app}>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>
      <Route path="/sendbox">
        <Sendbox />
      </Route>

    </div>
  );
};

export default App;
