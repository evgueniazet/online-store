import React, { useState } from 'react';
import styles from '../Card/Card.module.scss';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { CardProps } from '../../interfaces/CardProps';

export const Card: React.FC<CardProps> = ({
  title,
  images,
  brand,
  category,
  price,
  id,
  isExistInBasket,
  onAddToCart,
  onRemoveFromCart,
}: CardProps) => {
  const handleClickAddToCart = (): void => {
    onAddToCart(id);
  };

  const handleClickRemoveFromCart = (): void => {
    onRemoveFromCart(id);
  };

  const handleClickDetails = (): void => {
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
        {isExistInBasket ? (
          <Button
            title='Remove from cart'
            color={ButtonColors.Primary}
            className={styles.cardButton}
            onClick={handleClickRemoveFromCart}
          />
        ) : (
          <Button
            title='Add to cart'
            color={ButtonColors.Primary}
            className={styles.cardButton}
            onClick={handleClickAddToCart}
          />
        )}
        <Button
          title='Details'
          color={ButtonColors.Primary}
          className={styles.cardButton}
          onClick={handleClickDetails}
        />
      </div>
    </div>
  );
};