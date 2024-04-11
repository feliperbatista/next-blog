import HomePage from '@/containers/HomePage';
import { getAllCategories } from '@/data/posts/get-all-categories';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();
  return {
    paths: categories.map((c) => {
      return {
        params: {
          category: c.attributes.name,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const urlQuery = `sort[0]=id:desc&filters[category][name][$in][0]=${ctx.params?.category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts, category: ctx.params?.category },
  };
};
