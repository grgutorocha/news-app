import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { constants } from 'src/utils/constants';

import News, { INewsProps } from './components/News';
import { Container, Header, Footer, Title, Body, AllNewsLink, NewsWrapper } from './styles';

export interface INaHoraProps {
  list: INewsProps[];
}

export const NaHora = ({ list }: INaHoraProps) => {
  return (
    <Container>
      <Header>
        <Title>Na hora</Title>
      </Header>
      <Body>
        {list.map((item) => (
          <NewsWrapper key={uuid()}>
            <News {...item} />
          </NewsWrapper>
        ))}
      </Body>
      <Footer>
        <Link href={constants.ROUTE.NA_HORA} passHref>
          <AllNewsLink>Veja todas as notícias</AllNewsLink>
        </Link>
      </Footer>
    </Container>
  );
};

export default NaHora;
