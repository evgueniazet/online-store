import React, { useEffect, useState } from 'react';
import styles from '../Header/Header.module.scss';
import { IconBasket, IconStore } from '../../icons/icons';
import { HeaderProps } from '../../interfaces/HeaderProps';
import LocalStorage from '../../utils/LocalStorage';
import { StorageKey } from '../../interfaces/StorageKey';
import { Basket } from '../../interfaces/Basket';
import { defaultBasket } from '../../variables/variables';

export const Header: React.FC<HeaderProps> = ({ price }: HeaderProps) => {
  const storage = LocalStorage.getInstance();
  const [basket, setBasket] = useState<Basket>(defaultBasket);

  const handleStorageEvent = () => {
    const basket = storage.getData<StorageKey, Basket>(StorageKey.basket);

    if (basket) {
      setBasket(basket);
    }
  };
  useEffect(() => {
    const basket: Basket | null = storage.getData(StorageKey.basket);

    if (basket) {
      setBasket(basket);
    }

    window.addEventListener('storage', handleStorageEvent);
    return () => window.removeEventListener('storage', handleStorageEvent);
  }, []);

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
          <span className={styles.headerProductsSum}>{basket.products.reduce((a,b) => a + b.quantity, 0)}</span>
          <a href='/cart'>
            <IconBasket className={styles.headerBasket} />
          </a>
        </div>
      </div>
    </header>
  );
};