import React from 'react';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

import { constants } from 'src/utils/constants';

import { Container, Item, TextLink } from './styles';

interface ICategoriesProps {
  list?: ICategory[];
}

const Categories = ({ list }: ICategoriesProps): JSX.Element => {
  if (!list) {
    return <></>;
  }

  return (
    <Container>
      {list.map((item) => (
        <Item key={uuid()}>
          <Link href={`${constants.ROUTE.EDITORIA.BASE}/${item.cat_slug}`} passHref>
            <TextLink>{item.cat_nome}</TextLink>
          </Link>
        </Item>
      ))}
    </Container>
  );
};

export default Categories;
