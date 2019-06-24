import React, { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.Footer}>
    <section className={styles.Copyright}>
      Copyright © {new Date().getFullYear()} Adrian Kulesza
    </section>
  </footer>
);

export default Footer;
