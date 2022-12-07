import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { constants } from 'src/utils/constants';

import News, { INewsProps } from './components/News';
import { Container, Header, Footer, Title, Body, AllNewsLink, NewsWrapper } from './styles';

export interface INaHoraProps {
  title: string;
  slug: string;
  list: INewsProps[];
}

export const NaHora = ({ list, slug, title }: INaHoraProps) => {
  const setTitle = (title: string): string => {
    return !title ? '' : `| ${title}`;
  };

  const setRoute = (route: string, slug: string): string => {
    return !slug ? route : `${route}/${slug}`;
  };

  return (
    <Container>
      <Header>
        <Title>
          Na hora <span>{setTitle(title)}</span>
        </Title>
      </Header>
      <Body>
        {list.map((item) => (
          <NewsWrapper key={uuid()}>
            <News {...item} />
          </NewsWrapper>
        ))}
      </Body>
      <Footer>
        <Link href={setRoute(constants.ROUTE.NA_HORA, slug)} passHref>
          <AllNewsLink>Veja todas as notícias</AllNewsLink>
        </Link>
      </Footer>
    </Container>
  );
};

export default NaHora;
