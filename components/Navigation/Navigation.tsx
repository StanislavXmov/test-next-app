'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navigation.module.css';

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};



export const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {navLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <Link 
            key={link.label}
            href={link.href}
            className={isActive ? styles.active : ''}
          >{link.label}</Link>
        );
      })}
    </nav>
  );
};
