'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";

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
  const session = useSession();

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
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </nav>
  );
};
