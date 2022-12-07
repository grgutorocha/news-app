import Head from 'next/head';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import FaleConoscoContainer from 'src/containers/FaleConosco';

const { HEAD, ROUTE } = constants;

const FaleConosco = () => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.FALE_CONOSCO])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.FALE_CONOSCO])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.FALE_CONOSCO])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.FALE_CONOSCO)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.FALE_CONOSCO])} />
      </Head>
      <FaleConoscoContainer />
    </>
  );
};

export default FaleConosco;
