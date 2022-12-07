import Image from 'next/image';
import Link from 'next/link';

import { Container, ImageWrapper, Info, Title } from './styles';

export interface IPrimaryProps {
  title: string;
  url: string;
  picture: string;
}

const Primary = ({ title, picture, url }: IPrimaryProps) => {
  return (
    <Container>
      <ImageWrapper>
        <Link href={url} passHref>
          <a>
            <Image src={picture} width="992" height="671" layout="responsive" alt={title} />
          </a>
        </Link>
      </ImageWrapper>
      <Info>
        <Title>
          <Link href={url} passHref>
            <a>{title}</a>
          </Link>
        </Title>
      </Info>
    </Container>
  );
};

export default Primary;
