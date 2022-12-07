import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Page } from 'src/@types/page';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as gtag from 'src/lib/gtag';
import GoogleAnalytics from 'src/components/GoogleAnalytics';
import { GlobalStyle, ThemeProvider, theme } from 'src/styles';
import Layout from 'src/layouts';

import 'nprogress/nprogress.css';
import 'src/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

NProgress.configure({
  showSpinner: true,
});

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
    };

    const handleStop = (url: string) => {
      NProgress.done();
      gtag.pageview(url);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Script
        id="Adsense-id"
        async
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3301957559932043"
        crossOrigin="anonymous"
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout type={Component.layout}>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
        <GoogleAnalytics />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
