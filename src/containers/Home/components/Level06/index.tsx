import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';

import { Container, Header, Item, ImageWrapper, Title, List } from './styles';
export interface ILevel06ItemProps {
  title: string;
  picture: string;
  url: string;
}

export interface ILevel06Props {
  list: ILevel06ItemProps[];
}

const Level06 = ({ list }: ILevel06Props) => {
  return (
    <Container>
      <Header>Destaques</Header>
      <List>
        {list.map(({ title, picture, url }) => (
          <Item key={uuid()}>
            <ImageWrapper>
              <Link href={url} passHref>
                <a>
                  <Image src={picture} width="500" height="343" layout="responsive" alt={title} />
                </a>
              </Link>
            </ImageWrapper>
            <Title>
              <Link href={url} passHref>
                <a>{title}</a>
              </Link>
            </Title>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Level06;
