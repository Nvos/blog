import { Link } from 'gatsby';
import React from 'react';
import { FaCode } from 'react-icons/fa';
import styles from './Header.module.scss';

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className={styles.Header}>
    <Link to="/" className={styles.Home}>
      <FaCode />
      Creoi.dev
    </Link>
    <nav className={styles.Navigation}>
      <Link to="/">Skills</Link>
      <Link to="/">Blog</Link>
      <Link to="/">About</Link>
    </nav>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
