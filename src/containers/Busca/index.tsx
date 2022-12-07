import React from 'react';
import { v4 as uuid } from 'uuid';

import Pagination from 'src/components/Pagination';
import GoogleAd from 'src/components/GoogleAd';
import { helpers } from 'src/utils/helpers';
import { constants } from 'src/utils/constants';

import News from './components/News';
import { Wrapper, Container, PageTitle, Section, Body, Sidebar, SearchResume, PaginationWrapper } from './styles';

export interface IBuscaProps {
  pageSlug?: string[];
  list?: INaHora;
}

const Busca = ({ list, pageSlug }: IBuscaProps) => {
  const getRoute = (slugCategory?: string): string => {
    const titles = [constants.ROUTE.BUSCA];

    if (slugCategory) {
      titles.push(slugCategory);
    }

    return titles.join('/');
  };

  return (
    <Wrapper>
      <Container>
        <PageTitle>Busca</PageTitle>
        {Boolean(pageSlug && pageSlug?.length > 0) && (
          <SearchResume>
            Resultado da busca por: <span>{pageSlug?.join(' ')}</span>
          </SearchResume>
        )}
        <Section>
          <Body>
            {list?.data && Boolean(list?.data?.length > 0) ? (
              <>
                {list.data.map((item) => (
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
              </>
            ) : (
              <div>Não foram encontrados resultados.</div>
            )}
            {list?.data && Boolean(list?.data?.length > 0) && (
              <PaginationWrapper>
                <Pagination
                  simple
                  defaultCurrent={list?.current_page}
                  total={list?.total}
                  route={getRoute(pageSlug?.join('-'))}
                />
              </PaginationWrapper>
            )}
          </Body>
          <Sidebar>
            <GoogleAd name="medium" slot="999999" />
          </Sidebar>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Busca;
