import React from 'react';
import styles from './App.module.scss';
import './styles/fonts.scss';
import Route from './utils/Route';
import HomePage from './components/Pages/Home';
import CheckoutPage from './components/Pages/Checkout';
import ProductPage from './components/Pages/Product';

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
    </div>
  );
};

export default App;
