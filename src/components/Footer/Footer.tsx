import React from 'react';
import styles from '../Footer/Footer.module.scss';
import { IconSchool } from '../../icons/icons';

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footerAuthorsInfo}>
          <span className={styles.authors}>Github authors:</span>
          <div className={styles.footerAuthorsLinks}>
            <a className={styles.authorLink} href='https://github.com/Commandor05'>
              O. Kaliuzhnyi
            </a>
            <a className={styles.authorLink} href='https://github.com/evgueniazet'>
              E. Zelenko
            </a>
          </div>
        </div>
        <span>2022</span>
        <a className={styles.schoolLink} href='https://rs.school/js/'>
          <IconSchool className={styles.footerLogo} />
        </a>
      </div>
    </footer>
  );
};