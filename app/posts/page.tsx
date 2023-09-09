'use client';
import { usePosts } from "@/store/usePosts";
import { useEffect } from "react";
import { Posts as PostsComponents } from '@/components/Posts/Posts';
import { PostSearch } from "@/components/PostsSearch/PostsSearch";

export default function Posts() {
  const isLoading = usePosts(state => state.isLoading);
  const posts = usePosts(state => state.posts);
  const getAllPosts = usePosts(state => state.getAllPosts);

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <main>
      <h3>Posts</h3>
      <PostSearch />
      {isLoading ? <h3>Loading...</h3> : <PostsComponents posts={posts} />}
    </main>
  );
}