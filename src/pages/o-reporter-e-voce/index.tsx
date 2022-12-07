import Head from 'next/head';

import { constants } from 'src/utils/constants';
import { helpers } from 'src/utils/helpers';
import OReporterEVoceContainer from 'src/containers/OReporterEVoce';

const { HEAD, ROUTE } = constants;

const OReporterEVoce = () => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle([HEAD.META.TITLE.O_REPORTER_E_VOCE])}</title>
        <meta name="description" content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.O_REPORTER_E_VOCE])} />
        <meta property="og:title" content={helpers.setMetaTitle([HEAD.META.TITLE.O_REPORTER_E_VOCE])} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl(ROUTE.O_REPORTER_E_VOCE)} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta
          property="og:description"
          content={helpers.setMetaDescription([HEAD.META.DESCRIPTION.O_REPORTER_E_VOCE])}
        />
      </Head>
      <OReporterEVoceContainer />
    </>
  );
};

export default OReporterEVoce;
