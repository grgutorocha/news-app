import Link from 'next/link';
import Image from 'next/image';

import { Container, DateTime, Description, Info, Title, WrapperImage } from './styles';

export interface INewsProps {
  url: string;
  title: string;
  dateTime: string;
  description?: string;
  picture?: string;
}

const News = ({ url, title, dateTime, description, picture }: INewsProps) => {
  return (
    <Container>
      {picture && (
        <WrapperImage>
          <Link href={url} passHref>
            <a>
              <Image src={picture} width="280" height="168" layout="responsive" alt={title} />
            </a>
          </Link>
        </WrapperImage>
      )}
      <Info>
        <DateTime>{dateTime}</DateTime>
        <Title>
          <Link href={url} passHref>
            <a>{title}</a>
          </Link>
        </Title>
        <Description>
          <Link href={url} passHref>
            <a>{description}</a>
          </Link>
        </Description>
      </Info>
    </Container>
  );
};

export default News;
