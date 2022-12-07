import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';

import { List, Item, ImageWrapper, Title } from './styles';

export interface ILevel08ItemProps {
  title: string;
  picture: string;
  url: string;
}

export interface ILevel08Props {
  list: ILevel08ItemProps[];
}

const Level08 = ({ list }: ILevel08Props) => {
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

export default Level08;
