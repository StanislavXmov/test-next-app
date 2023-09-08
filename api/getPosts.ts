import { API } from "@/app/api";
import { Post } from "@/interfaces/post";

export const getAllPosts = async (): Promise<Post[]> => {
  const response = await fetch(API.posts.getPosts);
  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string): Promise<Post[]> => {
  const response = await fetch(API.posts.getPostsBySearch + search);
  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPost = async (id: string): Promise<Post> => {
  const response = await fetch(API.posts.getPosts + '/' + id);
  if (!response.ok) throw new Error("Unable to fetch post.");

  return response.json();
};