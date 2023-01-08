import React, { useState, useEffect } from 'react';
import styles from '../CartProduct/CartProduct.module.scss';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { Product } from '../../types/Product';
import { Basket } from '../../interfaces/Basket';

interface CartProduct {
  product: Product;
  onAddProduct: (id: number) => void;
  onRemoveProduct: (id: number) => void;
  quantity: number;
}

const defaultBasket: Basket = {
  isPromo: false,
  products: [],
};

export const CartProduct: React.FC<CartProduct> = ({
  product,
  onAddProduct,
  onRemoveProduct,
  quantity,
}: CartProduct) => {
  const handleAddProduct = (): void => {
    onAddProduct(product.id);
  };

  const handleRemoveProduct = (): void => {
    onRemoveProduct(product.id);
  };

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
          title='-'
          className={styles.productButton}
          color={ButtonColors.Primary}
          onClick={handleRemoveProduct}
        />
        <span className={styles.productAmount}>{quantity}</span>
        <Button
          title='+'
          className={styles.productButton}
          color={ButtonColors.Primary}
          onClick={handleAddProduct}
        />
      </div>
    </div>
  );
};