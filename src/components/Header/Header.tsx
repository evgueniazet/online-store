import React from 'react';
import styles from '../Header/Header.module.scss';
import { IconBasket, IconStore } from '../../icons/icons';
import { HeaderProps } from '../../interfaces/HeaderProps';

export const Header: React.FC<HeaderProps> = ({ price }: HeaderProps) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <IconStore className={styles.headerLogoIcon} />
          <span className={styles.headerLogoTitle}>Online Store</span>
        </div>
        <span className={styles.headerText}> Total: {price}</span>
        <IconBasket className={styles.headerBasket} />
      </div>
    </header>
  );
};