import Image from 'next/image';
import Link from 'next/link';

import { Container, ImageWrapper, Info, Title, SubTitle } from './styles';

export interface ILevel11Props {
  title: string;
  subtitle?: string;
  url: string;
  picture: string;
}

const Level11 = ({ title, subtitle, picture, url }: ILevel11Props) => {
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
        {subtitle && (
          <SubTitle>
            <Link href={url} passHref>
              <a>{subtitle}</a>
            </Link>
          </SubTitle>
        )}
      </Info>
    </Container>
  );
};

export default Level11;
