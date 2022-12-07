import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import EditoriaContainer, { IEditoria } from 'src/containers/Editoria';
import { helpers } from 'src/utils/helpers';
import { headlinesService } from 'src/api/services/headlines';
import { editoriaDAO } from 'src/dao/EditoriaDAO';
import { constants } from 'src/utils/constants';
import { naHoraService } from 'src/api/services/naHora';

interface IEditoriaProps extends IEditoria {
  pageDescription: string;
}

interface IGetServerSidePropsParams extends ParsedUrlQuery {
  slug: string;
}

interface IGetServerSidePropsResponse extends IEditoriaProps {}

const Editoria = (props: IEditoriaProps) => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([props?.pageTitle])}</title>
        <meta name="description" content={helpers.setMetaDescription([props?.pageDescription])} />
        <meta property="og:title" content={helpers.setMetaTitle([props?.pageTitle])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(`${constants.ROUTE.EDITORIA.BASE}/${props?.pageSlug}`)} />
        <meta property="og:image" content={helpers.setMetaOgImageEditorial(props?.pageSlug)} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([props?.pageDescription])} />
      </Head>
      <EditoriaContainer {...props} />
    </>
  );
};

export default Editoria;

export const getServerSideProps: GetServerSideProps<IGetServerSidePropsResponse, IGetServerSidePropsParams> = async ({
  params,
  query,
}) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const { data } = await headlinesService.getEditorial(params.slug);

  const { data: dataList } = await naHoraService.getByCategory(params?.slug, {
    params: {
      perPage: constants.PAGINATION.PER_PAGE,
      current: query.page || 1,
      headlinesIds: data?.headlinesIds?.join('-') ?? '',
    },
  });

  return {
    props: {
      pageTitle: data.pageTitle,
      pageDescription: data.pageDescription,
      pageSlug: data.pageSlug,
      level01: editoriaDAO.level01(data.level01),
      level02: editoriaDAO.level02(data.level02),
      level03: editoriaDAO.level03(data.level03),
      level04: editoriaDAO.level04(data.level04),
      level05: editoriaDAO.level05(data.level05),
      naHora: dataList,
    },
  };
};
