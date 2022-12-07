module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.domain.com', 'localhost'],
  },
  async redirects() {
    return [
      { source: '/m', destination: '/', permanent: true },
      { source: '/redirect-old-url-no-longer-exsit', destination: '/', permanent: true },
      { source: '/:slug(.*)\\,:id(.*)\\999.htm', destination: '/', permanent: true },
      { source: '/old-url,350', destination: '/category/new-url', permanent: true },
      { source: '/\\alternative-text-:slug\\,:id', destination: '/category/:slug', permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/url',
        destination: '/real/url',
      },
    ];
  },
};
