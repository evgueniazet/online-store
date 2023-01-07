import React from 'react';
import styles from './ProductCards.module.scss';
import '../../styles/fonts.scss';
import { Card } from '../Card/Card';
import { ProductCardsProps } from '../../types/Product';

const ProductCards = ({ products }: ProductCardsProps) => {

  return (
    <div className={styles.cardsContainer}>
      {products.map((card) => {
        return (
          <Card
            key={card.id}
            brand={card.brand}
            price={card.price}
            category={card.category}
            title={card.title}
            images={card.images}
          />
        );
      })}
    </div>
  );
}

export default ProductCards;