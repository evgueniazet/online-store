import React from 'react';
import { PageProps } from '../../types/Page';
import styles from './CartPage.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TextInput } from '../Input/TextInput';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';

const testProduct = {
  title: 'iPhone 9',
  price: 40,
  rating: 4.69,
  description: 'An apple mobile which is nothing like apple',
  discountPercentage: 12.96,
  stock: 94,
  brand: 'Apple',
  category: 'Smartphones',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ],
};

const CartPage = ({ queryParams }: PageProps) => {
  const [value, setValue] = React.useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleClick = (): void => {
    console.log('click');
  };

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
                  onChange={handleChange}
                  value={value}
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
            <div className={styles.produsts}></div>
            <div className={styles.emptyCart}>
              <span>Cart is empty!</span>
            </div>
            <div className={styles.product}>
              <span className={styles.productNumber}>1</span>
              <img src={testProduct.images[0]} className={styles.productImg} />
              <div className={styles.productInfo}>
                <span className={styles.productTitle}>{testProduct.title}</span>
                <span>Description: {testProduct.description}</span>
                <span>Rating: {testProduct.rating}</span>
                <span>Discount: {testProduct.discountPercentage}</span>
                <span>Stock: {testProduct.stock}</span>
                <span>Price: {testProduct.price}</span>
              </div>
              <div className={styles.productSum}>
                <Button
                  title='<'
                  className={styles.productButton}
                  color={ButtonColors.Primary}
                  onClick={handleClick}
                />
                <span className={styles.productAmount}>1</span>
                <Button
                  title='>'
                  className={styles.productButton}
                  color={ButtonColors.Primary}
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className={styles.sum}>
            <span className={styles.sumTitle}>Summary</span>
            <span className={styles.sumProducts}>Products: 0</span>
            <span className={styles.totalSum}>Total: 0 $</span>
            <TextInput
              className={styles.sumTextInput}
              placeholder='Insert text'
              onChange={handleChange}
              value={value}
            />
            <Button
              title='Buy now'
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