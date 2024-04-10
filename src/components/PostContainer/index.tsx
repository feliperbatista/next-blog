import Markdown from 'react-markdown';
import { Container } from './styled';

export type PostContainereProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainereProps) => {
  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  );
};
