import { BASE_URL } from "@/const";
import { Post } from "@/types/post";

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  const posts: Post[] = await res.json();
  return posts;
};

export const getPostById = async (postId: number): Promise<Post | null> => {
  const res = await fetch(`${BASE_URL}/posts${postId}`);

  if (!res) {
    return null;
  }

  const post: Post = await res.json();
  return post;
};
