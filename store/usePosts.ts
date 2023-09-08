import { getAllPosts, getPostsBySearch } from "@/api/getPosts";
import { Post } from "@/interfaces/post";
import { create } from "zustand";

type UsePosts = {
  posts: Post[];
  isLoading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>((set) => ({
  posts: [],
  isLoading: false,
  getAllPosts: async () => {
    set({isLoading: true});
    const posts = await getAllPosts();
    set({posts, isLoading: false});
  },
  getPostsBySearch: async (value) => {
    set({isLoading: true});
    const posts = await getPostsBySearch(value);
    set({posts, isLoading: false});
  },
}));