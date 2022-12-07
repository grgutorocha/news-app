import Head from 'next/head';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import AnuncieContainer from 'src/containers/Anuncie';

const { HEAD, ROUTE } = constants;

const Anuncie = () => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.ANUNCIE])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.ANUNCIE])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.ANUNCIE])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.ANUNCIE)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.ANUNCIE])} />
      </Head>
      <AnuncieContainer />
    </>
  );
};

export default Anuncie;
