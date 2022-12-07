import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';

import { helpers } from 'src/utils/helpers';

import { Container, Header, Body, Title, Item, ImageWrapper, NewsInfo, NewsTitle, NewsResume } from './styles';

export interface IRelatedsProps {
  list: (IRelated | undefined | null)[];
}

export const Relateds = ({ list }: IRelatedsProps) => (
  <Container>
    <Header>
      <Title>Leia mais</Title>
    </Header>
    <Body>
      {list?.map((item) => {
        const title = item?.not_tit;
        const url = helpers.mountNewsUrl(item?.not_tit ?? '', item?.not_id ?? '');
        const picture = item?.imagem || item?.imagem2 || '';
        const resume = item?.not_res;

        return (
          <Item key={uuid()}>
            {picture && (
              <ImageWrapper>
                <Link href={url} passHref>
                  <a>
                    <Image src={picture} width="160" height="110" layout="responsive" alt={title} />
                  </a>
                </Link>
              </ImageWrapper>
            )}
            <NewsInfo>
              <NewsTitle>
                <Link href={url} passHref>
                  <a>{title}</a>
                </Link>
              </NewsTitle>
              {resume && (
                <NewsResume>
                  <Link href={url} passHref>
                    <a>{resume}</a>
                  </Link>
                </NewsResume>
              )}
            </NewsInfo>
          </Item>
        );
      })}
    </Body>
  </Container>
);
