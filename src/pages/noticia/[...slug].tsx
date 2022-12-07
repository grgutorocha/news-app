import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { newsService } from 'src/api/services/news';
import { helpers } from 'src/utils/helpers';
import NoticiaContainer from 'src/containers/Noticia';
import { newsDAO } from 'src/dao/NewsDAO';

interface IGetStaticPropsParams extends ParsedUrlQuery {
  slug: string[];
}

interface IGetStaticPropsResponse extends INews {}

const Noticia = (props: INews) => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([props?.not_tit])}</title>
        <meta name="description" content={helpers.setMetaDescription([props?.not_res])} />
        <meta name="keywords" content={helpers.setMetaKeywords(props?.tags)} />
        <meta property="og:title" content={helpers.setMetaTitle([props?.not_tit])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.mountNewsUrl(props?.not_tit, props?.not_id, true)} />
        <meta property="og:image" content={helpers.setMetaOgImage(props?.imagem_fotao || props?.imagem2)} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([props?.not_res])} />
      </Head>
      <NoticiaContainer {...props} />
    </>
  );
};

export default Noticia;

export const getStaticProps: GetStaticProps<IGetStaticPropsResponse, IGetStaticPropsParams> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const { data } = await newsService.getBySlug(params?.slug.reverse()[0]);

  if (data.length <= 0) {
    return { notFound: true };
  }

  return {
    props: newsDAO.news(data),
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
