import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { helpers } from 'src/utils/helpers';
import { headlinesService } from 'src/api/services/headlines';
import HomeContainer, { IHome } from 'src/containers/Home';
import { homeDAO } from 'src/dao/HomeDAO';

interface IHomeProps extends IHome {}

interface IGetServerSidePropsParams extends ParsedUrlQuery {}

interface IGetServerSidePropsResponse extends IHome {}

const Home = (props: IHomeProps) => {
  return (
    <>
      <Head>
        <title>{helpers.setMetaTitle()}</title>
        <meta name="description" content={helpers.setMetaDescription()} />
        <meta property="og:title" content={helpers.setMetaTitle()} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={helpers.setMetaOgUrl()} />
        <meta property="og:image" content={helpers.setMetaOgImage()} />
        <meta property="og:site_name" content={helpers.setMetaOgSiteName()} />
        <meta property="og:description" content={helpers.setMetaDescription()} />
      </Head>
      <HomeContainer {...props} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<
  IGetServerSidePropsResponse,
  IGetServerSidePropsParams
> = async () => {
  const { data } = await headlinesService.getHome();

  return {
    props: {
      level01: homeDAO.level01(data.level01),
      level02: homeDAO.level02(data.level02),
      level03: homeDAO.level03(data.level03),
      level04: homeDAO.level04(data.level04),
      level05: homeDAO.level05(data.level05),
      level06: homeDAO.level06(data.level06),
      naHora: homeDAO.naHora(data.naHora),
      level08: homeDAO.level08(data.level08),
      level10: homeDAO.level10(data.level10),
      level11: homeDAO.level11(data.level11),
    },
  };
};
