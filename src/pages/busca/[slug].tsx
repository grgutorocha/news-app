import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import BuscaContainer, { IBuscaProps } from 'src/containers/Busca';
import { searchService } from 'src/api/services/search';

interface IGetServerSidePropsResponse extends IBuscaProps {}

interface IGetServerSidePropsParams extends ParsedUrlQuery {
  slug?: string;
}

const { HEAD } = constants;

const Busca = (props: IBuscaProps) => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.BUSCA])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.BUSCA])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.BUSCA])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl()} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.BUSCA])} />
      </Head>
      <BuscaContainer {...props} />
    </>
  );
};

export default Busca;

export const getServerSideProps: GetServerSideProps<IGetServerSidePropsResponse, IGetServerSidePropsParams> = async ({
  params,
  query,
}) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const { data } = await searchService.get({
    params: {
      perPage: constants.PAGINATION.PER_PAGE,
      current: query.page || 1,
      query: params?.slug,
    },
  });

  return {
    props: {
      list: data,
      pageSlug: params?.slug?.split('-'),
    },
  };
};
