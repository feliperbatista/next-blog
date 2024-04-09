import { Container } from './styles';

export type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <Container>{children}</Container>;
};
