import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { IGetTrendingTopicsResponse } from 'src/api/services/box';
import { helpers } from 'src/utils/helpers';

import { LoadSkeleton } from './LoadSkeleton';
import { Container, Header, Title, Body, List, Item, ItemTitle } from './styles';

interface IViewProps {
  list: IGetTrendingTopicsResponse;
  loading: boolean;
  title: string;
}

const View = ({ loading, list, title }: IViewProps) => (
  <Container>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Body>
      <List>
        {loading ? (
          <LoadSkeleton count={5} />
        ) : (
          <>
            {list.map(({ not_id, not_tit }) => (
              <Item key={uuid()}>
                <ItemTitle>
                  <Link href={helpers.mountNewsUrl(not_tit, not_id)} passHref>
                    <a>{not_tit}</a>
                  </Link>
                </ItemTitle>
              </Item>
            ))}
          </>
        )}
      </List>
    </Body>
  </Container>
);

export default View;
