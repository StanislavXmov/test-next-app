import React from 'react';
import { Clock } from '../Clock/Clock';

import styles from './Header.module.css';
import { Navigation } from '../Navigation/Navigation';

const navItems = [
  {label: 'Home', href: '/'},
  {label: 'Posts', href: '/posts'},
  {label: 'About', href: '/about'},
];

export const Header = () => {
  const now = new Date();
  return (
    <header className={styles.header}>
      <div>
        <Clock time={now.getTime()} />
      </div>
      <Navigation navLinks={navItems} />
      <div className={styles.title}>
        test next app
      </div>
    </header>
  );
};
