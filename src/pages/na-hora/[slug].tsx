import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import NaHoraContainer from 'src/containers/NaHora';
import { naHoraService } from 'src/api/services/naHora';

interface INaHoraEditoriaProps extends INaHora {
  page?: string;
  slug?: string;
  title?: string;
  description?: string;
}

interface IGetServerSidePropsResponse extends INaHoraEditoriaProps {}

interface IGetServerSidePropsParams extends ParsedUrlQuery {
  slug?: string;
}

const { HEAD } = constants;

const NaHora = (props: INaHoraEditoriaProps) => {
  const getTitle = (titleCategory?: string): string[] => {
    const titles = [HEAD.META.TITLE.NA_HORA];

    if (titleCategory) {
      titles.push(titleCategory);
    }

    return titles;
  };

  const getDescription = (descriptionCategory?: string): string[] => {
    const descriptions = [];

    if (descriptionCategory) {
      descriptions.push(descriptionCategory);
    }

    return descriptions;
  };

  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle(getTitle(props.title))}</title>
        <meta name="description" content={helpers.setMetaDescription(getDescription(props.description))} />
      </Head>
      <NaHoraContainer {...props} />
    </>
  );
};

export default NaHora;

export const getServerSideProps: GetServerSideProps<IGetServerSidePropsResponse, IGetServerSidePropsParams> = async ({
  params,
  query,
}) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const { data } = await naHoraService.getByCategory(params?.slug, {
    params: {
      perPage: constants.PAGINATION.PER_PAGE,
      current: query.page || 1,
    },
  });

  return {
    props: {
      ...data,
      title: params?.slug,
      description: params?.slug,
      slug: params?.slug,
      page: query.page?.toString() || '1',
    },
  };
};
