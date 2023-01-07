import React from 'react';
import styles from '../Header/Header.module.scss';
import { IconBasket, IconStore } from '../../icons/icons';
import { HeaderProps } from '../../interfaces/HeaderProps';

export const Header: React.FC<HeaderProps> = ({ price }: HeaderProps) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <a href='/'>
            <IconStore className={styles.headerLogoIcon} />
            <span className={styles.headerLogoTitle}>Online Store</span>
          </a>
        </div>
        <span className={styles.headerText}> Total: {price}</span>
        <div className={styles.basketWrapper}>
          <span className={styles.headerProductsSum}>1</span>
          <a href='/cart'>
            <IconBasket className={styles.headerBasket} />
          </a>
        </div>
      </div>
    </header>
  );
};