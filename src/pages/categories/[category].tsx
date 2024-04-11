import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `sort[0]=id:desc&filters[category][name][$in][0]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts, category: ctx.query.category },
  };
};
