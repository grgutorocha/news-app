import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';

import LogotypeRockInRioFull from 'src/components/LogotypeRockInRioFull';

import { Container, Header, Item, ImageWrapper, Title, List } from './styles';
import LogotypeRockInRio from 'src/components/LogotypeRockInRio';

export interface ILevel10ItemProps {
  title: string;
  picture: string;
  url: string;
}

export interface ILevel10Props {
  list: ILevel10ItemProps[];
}

const Level10 = ({ list }: ILevel10Props) => {
  return (
    <Container>
      <Header>
        <span>Especial</span> <LogotypeRockInRio />
      </Header>
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

export default Level10;
