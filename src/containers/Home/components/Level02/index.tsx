import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { List, Item } from './styles';

export interface ILevel02ItemProps {
  title: string;
  url: string;
}

export interface ILevel02Props {
  list: ILevel02ItemProps[];
}

const Level02 = ({ list }: ILevel02Props) => {
  return (
    <List>
      {list.map(({ title, url }) => (
        <Item key={uuid()}>
          <Link href={url} passHref>
            <a>{title}</a>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default Level02;
