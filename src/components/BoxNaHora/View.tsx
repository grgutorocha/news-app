import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { IGetNaHoraResponse } from 'src/api/services/box';
import { helpers } from 'src/utils/helpers';

import { LoadSkeleton } from './LoadSkeleton';
import { Container, Header, Title, Subtitle, Body, List, Item, ItemNumber, ItemTitle } from './styles';

interface IViewProps {
  list: IGetNaHoraResponse;
  loading: boolean;
  title: string;
  subtitle?: string | React.ReactNode;
}

const View = ({ loading, list, title, subtitle }: IViewProps) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Header>
    <Body>
      <List>
        {loading ? (
          <LoadSkeleton count={5} />
        ) : (
          <>
            {list.map(({ not_id, not_tit }, index) => (
              <Item key={uuid()}>
                <ItemNumber>{index + 1}</ItemNumber>
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
