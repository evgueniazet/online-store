import React from 'react';
import styles from '../Card/Card.module.scss';
import { Product } from '../../interfaces/Product';

export const Card: React.FC<Product> = ({
  title,
  images,
  brand,
  category,
  price,
  key,
}: Product) => {
  return (
    <div className={styles.card}>
      {key}
      <div className={styles.cardTitle}>{title}</div>
      <img src={images[0]} className={styles.cardImg} />
      <div className={styles.cardInfoWrapper}>
        <div className={styles.cardInfo}>
          <span>Category: {category}</span>
          <span>Brand: {brand}</span>
          <span>Price: {price}</span>
        </div>
      </div>
      <div className={styles.cardButtons}>
        <button className={styles.cardButton}>Add to cart</button>
        <button className={styles.cardButton}>Details</button>
      </div>
    </div>
  );
};