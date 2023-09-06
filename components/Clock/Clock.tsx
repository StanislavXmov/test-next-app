'use client';

import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';

type ClockProps = {
  time: number;
};

export const Clock = ({ time: initial }: ClockProps) => {
  const [time, setTime] = useState(new Date(initial));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.clock} >{time.toLocaleTimeString('en-GB')}</div>
  );
};
