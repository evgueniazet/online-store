import React from 'react';
import styles from '../Card/Card.module.scss';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { CardProp } from '../../interfaces/Product';

export const Card: React.FC<CardProp> = ({
  title,
  images,
  brand,
  category,
  price,
  id
}: CardProp) => {
  const handleClickCart = (): void => {
    location.href = '/cart';
  };

  const handleClickProductPage = (): void => {
    location.href = `/product?productId=${id}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <img src={images[0]} className={styles.cardImg} alt={title} />
      <div className={styles.cardInfoWrapper}>
        <div className={styles.cardInfo}>
          <span>Category: {category}</span>
          <span>Brand: {brand}</span>
          <span>Price: {price}</span>
        </div>
      </div>
      <div className={styles.cardButtons}>
        <Button
          title='Add to cart'
          color={ButtonColors.Primary}
          className={styles.cardButton}
          onClick={handleClickCart}
        />
        <Button
          title='Details'
          color={ButtonColors.Primary}
          className={styles.cardButton}
          onClick={handleClickProductPage}
        />
      </div>
    </div>
  );
};