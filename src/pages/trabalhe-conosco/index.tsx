import Head from 'next/head';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import TrabalheConoscoContainer from 'src/containers/TrabalheConosco';

const { HEAD, ROUTE } = constants;

const TrabalheConosco = () => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.TRABALHE_CONOSCO])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.TRABALHE_CONOSCO])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.TRABALHE_CONOSCO])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.TRABALHE_CONOSCO)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta
          property="og:description"
          content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.TRABALHE_CONOSCO])}
        />
      </Head>
      <TrabalheConoscoContainer />
    </>
  );
};

export default TrabalheConosco;
