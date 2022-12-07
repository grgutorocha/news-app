import Head from 'next/head';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import ExpedienteContainer from 'src/containers/Expediente';

const { HEAD, ROUTE } = constants;

const Expediente = () => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.EXPEDIENTE])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.EXPEDIENTE])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.EXPEDIENTE])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.EXPEDIENTE)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.EXPEDIENTE])} />
      </Head>
      <ExpedienteContainer />
    </>
  );
};

export default Expediente;
