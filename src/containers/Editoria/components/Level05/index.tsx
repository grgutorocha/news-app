import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';

import { List, Item, ImageWrapper, Title } from './styles';

export interface ILevel05ItemProps {
  title: string;
  picture: string;
  url: string;
}

export interface ILevel05Props {
  list: ILevel05ItemProps[];
}

const Level05 = ({ list }: ILevel05Props) => {
  return (
    <List>
      {list.map(({ title, picture, url }) => (
        <Item key={uuid()}>
          <ImageWrapper>
            <Image src={picture} width="500" height="346" layout="responsive" alt={title} />
          </ImageWrapper>
          <Title>
            <Link href={url} passHref>
              <a>{title}</a>
            </Link>
          </Title>
        </Item>
      ))}
    </List>
  );
};

export default Level05;
