import Link from 'next/link';

import { Container, Title, Description } from './styles';

export interface ILevel01Props {
  url: string;
  title: string;
  description?: string;
}

const Level01 = ({ title, description, url }: ILevel01Props) => {
  return (
    <Container>
      <Title>
        <Link href={url} passHref>
          <a>{title}</a>
        </Link>
      </Title>
    </Container>
  );
};

export default Level01;
