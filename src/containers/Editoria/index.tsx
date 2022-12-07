import { v4 as uuid } from 'uuid';
import Link from 'next/link';

import GoogleAd from 'src/components/GoogleAd';
import { helpers } from 'src/utils/helpers';
import Pagination from 'src/components/Pagination';
import { constants } from 'src/utils/constants';

import News from './components/News';
import Level01, { ILevel01Props } from './components/Level01';
import Level02, { ILevel02Props } from './components/Level02';
import Level03, { ILevel03Props } from './components/Level03';
import Level04, { ILevel04Props } from './components/Level04';
import Level05, { ILevel05Props } from './components/Level05';
import {
  Wrapper,
  WrapperContent,
  WrapperContentSidebar,
  WrapperContentLevel0102,
  WrapperContentLevel03,
  WrapperContentPubTop,
  Level0102EmptySpacer,
  PageTitle,
  Content,
  ContentCenter,
  Sidebar,
  Pub,
  PaginationWrapper,
  TextLink,
  VerticalSpacer,
} from './styles';

export interface IEditoria {
  pageTitle: string;
  pageSlug: string;
  level01?: ILevel01Props | null;
  level02?: ILevel02Props | null;
  level03?: ILevel03Props | null;
  level04?: ILevel04Props | null;
  level05?: ILevel05Props | null;
  naHora?: INaHora | null;
}

const Editoria = ({ pageTitle, pageSlug, level01, level02, level03, level04, level05, naHora }: IEditoria) => {
  const hasLevel01or02 = level01 || level02;

  const getRoute = (slugCategory?: string): string => {
    const titles = [constants.ROUTE.EDITORIA.BASE];

    if (slugCategory) {
      titles.push(slugCategory);
    }

    return titles.join('/');
  };

  return (
    <>
      {pageTitle && (
        <PageTitle>
          <Link href={getRoute(pageSlug)} passHref>
            <TextLink>{pageTitle}</TextLink>
          </Link>
        </PageTitle>
      )}
      <Wrapper>
        <>
          <WrapperContentPubTop>
            <ContentCenter>
              <GoogleAd name="billboard" slot="999999" />
            </ContentCenter>
          </WrapperContentPubTop>
          {naHora?.current_page === 1 && (
            <>
              {hasLevel01or02 ? (
                <WrapperContentLevel0102>
                  <Content>
                    {level01 && <Level01 {...level01} />}
                    {level02 && <Level02 {...level02} />}
                  </Content>
                </WrapperContentLevel0102>
              ) : (
                <Level0102EmptySpacer />
              )}
              {level03 && (
                <WrapperContentLevel03>
                  <Content>
                    <Level03 {...level03} />
                  </Content>
                </WrapperContentLevel03>
              )}
              {level04 && (
                <WrapperContent>
                  <Content>
                    <Level04 {...level04} />
                  </Content>
                </WrapperContent>
              )}
              {level05 && (
                <WrapperContent>
                  <Content>
                    <Level05 {...level05} />
                  </Content>
                </WrapperContent>
              )}
            </>
          )}
        </>
        <WrapperContentSidebar>
          <Content>
            {naHora?.data.map((item) => (
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
              <Pagination
                simple
                defaultCurrent={naHora?.current_page}
                total={naHora?.total}
                route={getRoute(pageSlug)}
              />
            </PaginationWrapper>
          </Content>
          <Sidebar>
            <GoogleAd name="medium" slot="999999" />
            <VerticalSpacer />
            <GoogleAd name="half-page" slot="999999" />
          </Sidebar>
        </WrapperContentSidebar>
      </Wrapper>
    </>
  );
};

export default Editoria;
