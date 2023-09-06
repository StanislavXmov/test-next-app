import React from 'react';
import { Clock } from '../Clock/Clock';

import styles from './Header.module.css';

export const Header = () => {
  const now = new Date();
  return (
    <header className={styles.header}>
      <div>
        <Clock time={now.getTime()} />
      </div>
      <div className={styles.title}>
        test next app
      </div>
    </header>
  );
};
