import { useState, useEffect } from 'react';
import { PageProps } from '../../types/Page';
import styles from './ProductPage.module.scss';
import { IconArrow } from '../../icons/icons';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Product } from '../../interfaces/Product';
import { ProductImages } from '../ProductImages/ProductImages';

const ProductPage = ({ queryParams }: PageProps) => {
  const [card, setCard] = useState<Product | null>(null);

  const handleClick = (): void => {
    console.log('click');
  };

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const productId = currentUrl.searchParams.get('productId');

    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setCard(data);
      })
      .catch((error: unknown) => {
        setCard(null);
      });
  }, []);

  if (!card) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.wrapper}>
      {/* TODO: Put conditional loader here while data is fetching */}
      {/* TODO: Put Home template component here with fetched data as props */}
      <Header price={1000} />

      <section className={styles.mainWrapper}>
        <div className={styles.mainDecoration} />
        <div className={styles.main}>
          <div className={styles.breadCrumbs}>
            <a href='/' className={styles.breadCrumbsItem}>
              Home Page
            </a>
            <IconArrow className={styles.breadCrumbsIcon} />
            <a href='#' className={styles.breadCrumbsItem}>
              {card.category}
            </a>
            <IconArrow className={styles.breadCrumbsIcon} />
            <a href='#' className={styles.breadCrumbsItem}>
              {card.brand}
            </a>
            <IconArrow className={styles.breadCrumbsIcon} />
            <a href='#' className={styles.breadCrumbsItem}>
              {card.title}
            </a>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>{card.title}</div>
            <div className={styles.card}>
              <ProductImages images={card.images} />
              <div className={styles.cardContent}>
                <div className={styles.cardButtonsWrapper}>
                  <div>Price:{card.price}$</div>
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
                      <div className={styles.cardItemInfo}>{card.description}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Discount Percentage:</h4>
                      <div className={styles.cardItemInfo}>{card.discountPercentage}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Rating:</h4>
                      <div className={styles.cardItemInfo}>{card.rating}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Stock:</h4>
                      <div className={styles.cardItemInfo}>{card.stock}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Brand:</h4>
                      <div className={styles.cardItemInfo}>{card.brand}</div>
                    </div>
                    <div className={styles.cardItem}>
                      <h4 className={styles.cardItemTitle}>Category:</h4>
                      <div className={styles.cardItemInfo}>{card.category}</div>
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