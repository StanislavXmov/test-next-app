import React from 'react';
import { Post } from '@/interfaces/post';
import Link from 'next/link';

import styles from './Posts.module.css';

export const Posts = ({ posts }: {posts: Post[]}) => {
  
  return (
    <ul className={styles.list}>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link className={styles.link} href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};