import React, { useState, useEffect } from 'react';
import styles from '../CartProduct/CartProduct.module.scss';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { Product } from '../../types/Product';

const handleClick = (): void => {
  console.log('click');
};

interface CartProduct {
  product: Product;
}

export const CartProduct: React.FC<CartProduct> = ({ product }: CartProduct) => {
  
  return (
    <div className={styles.product}>
      <span className={styles.productNumber}>1</span>
      <img src={product.images[0]} className={styles.productImg} />
      <div className={styles.productInfo}>
        <span className={styles.productTitle}>{product.title}</span>
        <span>Description: {product.description}</span>
        <span>Rating: {product.rating}</span>
        <span>Discount: {product.discountPercentage}</span>
        <span>Stock: {product.stock}</span>
        <span>Price: {product.price}</span>
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
  );
};