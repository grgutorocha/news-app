import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import NaHoraContainer from 'src/containers/NaHora';
import { naHoraService } from 'src/api/services/naHora';

interface INaHoraEditoriaProps extends INaHora {
  page?: string;
}

interface IGetServerSidePropsResponse extends INaHoraEditoriaProps {}

interface IGetServerSidePropsParams extends ParsedUrlQuery {}

const { HEAD, ROUTE } = constants;

const NaHora = (props: INaHora) => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.NA_HORA])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.NA_HORA])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.NA_HORA])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.NA_HORA)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.NA_HORA])} />
      </Head>
      <NaHoraContainer {...props} />
    </>
  );
};

export default NaHora;

export const getServerSideProps: GetServerSideProps<IGetServerSidePropsResponse, IGetServerSidePropsParams> = async ({
  query,
}) => {
  const { data } = await naHoraService.get({
    params: {
      perPage: constants.PAGINATION.PER_PAGE,
      current: query.page || 1,
    },
  });

  if (data.data.length <= 0) {
    return { notFound: true };
  }

  return {
    props: {
      ...data,
      page: query.page?.toString() || '1',
    },
  };
};
