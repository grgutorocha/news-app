import React from 'react';
import { v4 as uuid } from 'uuid';

import Pagination from 'src/components/Pagination';
import GoogleAd from 'src/components/GoogleAd';
import { helpers } from 'src/utils/helpers';
import { constants } from 'src/utils/constants';

import News from './components/News';
import { Wrapper, Container, PageTitle, Section, Body, Sidebar, PaginationWrapper } from './styles';

interface INaHoraProps extends INaHora {
  title?: string;
  slug?: string;
  description?: string;
}

const NaHora = ({ data, title, slug, total, current_page }: INaHoraProps) => {
  const getTitle = (title?: string): string => {
    const titles = ['Na Hora'];

    if (title) {
      titles.push(title);
    }

    return titles.join(' | ');
  };

  const getRoute = (slugCategory?: string): string => {
    const titles = [constants.ROUTE.NA_HORA];

    if (slugCategory) {
      titles.push(slugCategory);
    }

    return titles.join('/');
  };

  return (
    <Wrapper>
      <Container>
        <PageTitle>{getTitle(title)}</PageTitle>
        <Section>
          <Body>
            {data.map((item) => (
              <News
                key={uuid()}
                newsId={item.not_id}
                categories={item.category}
                title={item.not_tit}
                dateHour={helpers.formatNewsDate(`${item.not_data}T${item.not_hora}`)}
                resume={item.not_res}
                image={helpers.setImageUrlNews(item.imagem2)}
              />
            ))}
            <PaginationWrapper>
              <Pagination simple defaultCurrent={current_page} total={total} route={getRoute(slug)} />
            </PaginationWrapper>
          </Body>
          <Sidebar>
            <GoogleAd name="half-page" slot="999999" />
          </Sidebar>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default NaHora;
