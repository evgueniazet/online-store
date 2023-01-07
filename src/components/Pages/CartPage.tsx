import React, { useEffect } from 'react';
import { PageProps } from '../../types/Page';
import styles from './CartPage.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TextInput } from '../Input/TextInput';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { StorageKey } from '../../interfaces/StorageKey';
import LocalStorage from '../../utils/LocalStorage';
import { BasketProduct } from '../../interfaces/BasketProduct';
import { CartProduct } from '../CartProduct/CartProduct';
import { Basket } from '../../interfaces/Basket';
import { Product } from '../../types/Product';

const defaultBasket: Basket = {
  isPromo: false,
  products: [],
};

const CartPage = ({ queryParams }: PageProps) => {
  const [basket, setBasket] = React.useState<Basket>(defaultBasket);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [limit, setLimit] = React.useState<string>('3');
  const [promoCode, setPromoCode] = React.useState<string>('');
  const storage = LocalStorage.getInstance();

  const handleChangePromoCode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPromoCode(e.target.value);
  };

  const handleChangeLimit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLimit(e.target.value);
  };

  const handleClick = (): void => {
    console.log('click');
  };

  useEffect(() => {
    const basket: Basket | null = storage.getData(StorageKey.basket);

    if (basket) {
      setBasket(basket);

      const urls = basket.products.map((item) => `https://dummyjson.com/products/${item.id}`);
      const promises = urls.map((url) => fetch(url));

      Promise.all(promises)
        .then((response) => Promise.all(response.map((r) => r.json())))
        .then((results: Product[]) => {
          setProducts(results);
        });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header price={1000} />
      <section className={styles.mainWrapper}>
        <div className={styles.mainDecoration} />
        <div className={styles.main}>
          <div className={styles.productsWrapper}>
            <div className={styles.productsHeader}>
              <span className={styles.productsHeaderTitle}>Products in cart</span>
              <span>Limit:</span>
              <TextInput
                className={styles.productsHeaderInput}
                placeholder='Insert text'
                onChange={handleChangeLimit}
                value={limit}
              />
              <div className={styles.productsHeaderSumButtons}>
                <span className={styles.productsHeaderSum}>Page:</span>
                <Button
                  className={styles.productsHeaderButton}
                  title='<'
                  color={ButtonColors.Secondary}
                  onClick={handleClick}
                />
                <span className={styles.productsHeaderSumNumber}>1</span>
                <Button
                  className={styles.productsHeaderButton}
                  title='>'
                  color={ButtonColors.Secondary}
                  onClick={handleClick}
                />
              </div>
            </div>
            <div className={styles.products}>
              {!products.length && (
                <div className={styles.emptyCart}>
                  <span>Cart is empty!</span>
                </div>
              )}
              {products.map((product: Product) => {
                return <CartProduct product={product} key={product.id} />;
              })}
            </div>
          </div>
          <div className={styles.sum}>
            <span className={styles.sumTitle}>Summary</span>
            <span className={styles.sumProducts}>Products: 0</span>
            <span className={styles.totalSum}>Total: 0 $</span>
            <span className={styles.totalSum}>Promo code:</span>
            <TextInput
              className={styles.sumTextInput}
              placeholder='Insert text'
              onChange={handleChangePromoCode}
              value={promoCode}
            />
            <Button
              title='Submit promo code'
              className={styles.sumButton}
              color={ButtonColors.Primary}
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;