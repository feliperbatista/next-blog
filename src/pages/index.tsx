import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/data/posts/get-all-posts';
import HomePage from '@/containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('sort[0]=id:desc');
  return {
    props: { posts },
  };
};
