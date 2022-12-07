import Image from 'next/image';
import Link from 'next/link';

import { constants } from 'src/utils/constants';

import { ImageLink } from './styles';

const LogotypeRockInRio = () => (
  <Link href={constants.ROUTE.EDITORIA.ROCK_IN_RIO} passHref>
    <ImageLink>
      <Image src="/image/logo-rock-in-rio-menor.png" alt="Rock in Rio" width="128" height="35" />
    </ImageLink>
  </Link>
);

export default LogotypeRockInRio;
