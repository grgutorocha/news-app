import Image from 'next/image';
import Link from 'next/link';

import Categories from 'src/components/Categories';
import { helpers } from 'src/utils/helpers';

import { Container, Content, Info, Title, DateHour, Resume, ImageWrapper, TextLink } from './styles';

interface INewsProps {
  newsId: string | number;
  title: string;
  resume: string;
  dateHour: string;
  image: string | undefined;
  categories?: ICategory[];
}

const News = ({ categories, title, resume, dateHour, image, newsId }: INewsProps) => {
  return (
    <Container>
      <Categories list={categories} />
      <Content>
        {image && (
          <ImageWrapper>
            <Link href={helpers.mountNewsUrl(title, newsId)} passHref>
              <a>
                <Image src={image} alt={title} width="250" height="148" layout="responsive" />
              </a>
            </Link>
          </ImageWrapper>
        )}
        <Info>
          <DateHour>{dateHour}</DateHour>
          <Title>
            <Link href={helpers.mountNewsUrl(title, newsId)} passHref>
              <TextLink>{title}</TextLink>
            </Link>
          </Title>
          <Resume>{resume}</Resume>
        </Info>
      </Content>
    </Container>
  );
};

export default News;
