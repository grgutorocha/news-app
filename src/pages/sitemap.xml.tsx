import React from 'react';
import { GetServerSideProps } from 'next';

import { naHoraService } from 'src/api/services/naHora';
import { helpers } from 'src/utils/helpers';

const Sitemap = () => <></>;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { data } = await naHoraService.get({
    params: {
      perPage: 100,
      current: 1,
    },
  });

  if (data.data.length <= 0) {
    return { notFound: true };
  }

  const list = data.data.map(
    (item) =>
      `<url><loc>${helpers.mountNewsUrl(item.not_tit, item.not_id, true)}</loc><changefreq>always</changefreq></url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${list.join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
