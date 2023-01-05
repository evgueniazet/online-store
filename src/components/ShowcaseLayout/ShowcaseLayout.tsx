import React, { Children } from 'react';
import styles from './ShowcaseLayout.module.scss';
import {PageProps} from '../../types/Page';

const ShowcaseLayout = ({ children }: PageProps) => {
  const [filterBox, productsUtilityPanel, productCards] = Children.toArray(children);

  return (
    <div className={styles.main}>
      {filterBox}
      <div className={styles.cards}>
        {productsUtilityPanel}  
        {productCards}
      </div>
    </div>
  );
}

export default ShowcaseLayout;