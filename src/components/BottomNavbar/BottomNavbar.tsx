import React, { FC } from 'react';
import { FaBlog, FaCode, FaHome, FaUser } from 'react-icons/fa';
import style from './BottomNavbar.module.scss';

const BottomNavbar: FC = () => (
  <nav className={style.BottomNavbar}>
    <button className={style.Icon}>
      <FaHome />
      Home
    </button>
    <button className={style.Icon}>
      <FaCode />
      Skills
    </button>
    <button className={style.Icon}>
      <FaBlog />
      Blog
    </button>
    <button className={style.Icon}>
      <FaUser />
      About
    </button>
  </nav>
);

export default BottomNavbar;
