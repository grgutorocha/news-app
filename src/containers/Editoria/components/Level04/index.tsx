import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { Container, Item, ImageWrapper, Info, Title } from './styles';

export interface ILevel04ItemProps {
  title: string;
  url: string;
  picture: string;
}

export interface ILevel04Props {
  list: ILevel04ItemProps[];
}

const Level04 = ({ list }: ILevel04Props) => {
  return (
    <Container>
      {list.map(({ title, picture, url }) => (
        <Item key={uuid()}>
          <ImageWrapper>
            <Link href={url} passHref>
              <a>
                <Image src={picture} width="500" height="346" layout="responsive" alt={title} />
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
        </Item>
      ))}
    </Container>
  );
};

export default Level04;
