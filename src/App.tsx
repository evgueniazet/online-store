import Route from './utils/Route';
import HomePage from './components/Pages/Home';
import CheckoutPage from './components/Pages/Checkout';
import ProductPage from './components/Pages/Product';
import styles from './App.module.scss';

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
