import Head from 'next/head';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import QuemSomosContainer from 'src/containers/QuemSomos';

const { HEAD, ROUTE } = constants;

const QuemSomos = () => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.QUEM_SOMOS])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.QUEM_SOMOS])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.QUEM_SOMOS])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.QUEM_SOMOS)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.QUEM_SOMOS])} />
      </Head>
      <QuemSomosContainer />
    </>
  );
};

export default QuemSomos;
