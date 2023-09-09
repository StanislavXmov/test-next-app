'use client';
import { usePosts } from '@/store/usePosts';
import React, { FormEventHandler, useState } from 'react';

import styles from './PostsSearch.module.css';

export const PostSearch = () => {
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts(state => state.getPostsBySearch);

  const handler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    getPostsBySearch(search);
  };

  return (
    <form onSubmit={handler} >
      <input 
        className={styles.input}
        type="search" 
        placeholder='search' 
        value={search} 
        onChange={e => setSearch(e.target.value)}
      />
      <button className={styles.button} type='submit'>search</button>
    </form>
  );
};
