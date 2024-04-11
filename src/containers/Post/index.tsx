import { Comments } from '@/Comments';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { SITE_NAME } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { removeHTML } from '@/utils/remove-html';
import Head from 'next/head';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHTML(post.attributes.content.slice(0, 150))}
        ></meta>
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data[0].attributes.formats.large.url}
          alt={post.attributes.title}
        ></PostCover>
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        ></PostDetails>
        <PostContainer content={post.attributes.content} />
      </MainContainer>
      <Comments slug={post.attributes.slug} title={post.attributes.title} />
      <Footer />
    </>
  );
};
