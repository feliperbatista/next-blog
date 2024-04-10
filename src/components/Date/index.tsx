import { Container } from './styled';
import { formatDate } from '@/utils/format-date';

export type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};
