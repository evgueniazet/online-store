import React from 'react';
import { PageProps } from '../../types/Page';
import styles from './ProductPage.module.scss';
import { IconArrow } from '../../icons/icons';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const testProduct = {
  title: 'iPhone 9',
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

const ProductPage = ({ queryParams }: PageProps) => {
  const handleClick = (): void => {
    console.log('click');
  };
  // TODO: Add data fetching here according queryParams
  return (
    <div className={styles.wrapper}>
      {/* TODO: Put conditional loader here while data is fetching */}
      {/* TODO: Put Home template component here with fetched data as props */}
      <Header price={1000} />

      <section className={styles.mainWrapper}>
        <div className={styles.mainDecoration} />
        <div className={styles.main}>
          <div className={styles.breadCrumbs}>
            <a href='#' className={styles.breadCrumbsItem}>
              Home Page
            </a>
            <IconArrow className={styles.breadCrumbsIcon} />
            <a href='#' className={styles.breadCrumbsItem}>
              {testProduct.category}
            </a>
            <IconArrow className={styles.breadCrumbsIcon} />
            <a href='#' className={styles.breadCrumbsItem}>
              {testProduct.brand}
            </a>
            <IconArrow className={styles.breadCrumbsIcon} />
            <a href='#' className={styles.breadCrumbsItem}>
              {testProduct.title}
            </a>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>{testProduct.title}</div>
            <div className={styles.card}>
              <div className={styles.cardImages}>
                <div className={styles.cardMainImageWrapper}>
                  <img src={testProduct.images[1]} className={styles.cardMainImage} />
                </div>
                <div className={styles.cardImagesPreview}>
                  <img src={testProduct.images[0]} className={styles.cardImage} />
                  <img src={testProduct.images[1]} className={styles.cardImage} />
                  <img src={testProduct.images[2]} className={styles.cardImage} />
                  <img src={testProduct.images[3]} className={styles.cardImage} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardButtonsWrapper}>
                  <div>Price:</div>
                  <div className={styles.buttonWrapper}>
                    <Button
                      title='Add to cart'
                      color={ButtonColors.Primary}
                      onClick={handleClick}
                    />
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button title='Buy now' color={ButtonColors.Primary} onClick={handleClick} />
                  </div>
                </div>
                <div className={styles.cardListWrapper}>
                  <div className={styles.cardList}>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Description:</h4>
                      <div className={styles.cardItemInfo}>{testProduct.description}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Discount Percentage:</h4>
                      <div className={styles.cardItemInfo}>{testProduct.discountPercentage}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Rating:</h4>
                      <div className={styles.cardItemInfo}>{testProduct.rating}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Stock:</h4>
                      <div className={styles.cardItemInfo}>{testProduct.stock}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Brand:</h4>
                      <div className={styles.cardItemInfo}>{testProduct.brand}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Category:</h4>
                      <div className={styles.cardItemInfo}>{testProduct.category}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductPage;