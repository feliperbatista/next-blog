import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';
import { markdownToHtml } from '@/utils/markdown-to-html';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL.replace('?populate=*', '?filters[slug][$eq]=')}${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  console.log(jsonPosts[0].attributes.content.data);
  const content = '';
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};
