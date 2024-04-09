import { POSTS_URL } from '@/config/app-config';
import { PostsResponse } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const countAllPosts = async (): Promise<string> => {
  const url = `${POSTS_URL.replace('?populate=*', '/count')}`;

  const response = await fetch(url);
  const numberOfPosts = await response.text();
  return numberOfPosts;
};
