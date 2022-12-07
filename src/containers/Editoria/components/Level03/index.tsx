import Image from 'next/image';
import Link from 'next/link';

import { Container, ImageWrapper, Info, Title } from './styles';

export interface ILevel03Props {
  title: string;
  url: string;
  picture: string;
}

const Level03 = ({ title, picture, url }: ILevel03Props) => {
  return (
    <Container>
      <ImageWrapper>
        <Link href={url} passHref>
          <a>
            <Image src={picture} layout="fill" objectFit="cover" alt={title} priority />
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

export default Level03;
