import { useEffect } from 'react';

import { Container } from './styles';

const googleAdId = 'ca-pub-3301957559932043';

type TAdsNames = 'medium' | 'half-page' | 'maxiboard' | 'billboard';

interface IGooleAdProps {
  slot: string;
  name: TAdsNames;
  timeout?: number;
}

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const TIMEOUT = 1000;

const GoogleAd = ({ slot, name }: IGooleAdProps): JSX.Element => {
  useEffect(() => {
    const googleInit = setTimeout(() => {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }, TIMEOUT);

    return () => clearTimeout(googleInit);
  }, []);

  return (
    <Container>
      <ins
        className={`adsbygoogle custom-ads--${name}`}
        style={{ display: 'inline-block' }}
        data-ad-client={googleAdId}
        data-ad-slot={slot}
      ></ins>
    </Container>
  );
};

export default GoogleAd;
