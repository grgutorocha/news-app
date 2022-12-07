import Image from 'next/image';
import Link from 'next/link';

import { constants } from 'src/utils/constants';

import { ImageLink } from './styles';

const LogotypeRockInRioFull = () => (
  <Link href={constants.ROUTE.EDITORIA.ROCK_IN_RIO} passHref>
    <ImageLink>
      <Image src="/image/logo-rock-in-rio-full.png" alt="Rock in Rio" width="340" height="384" />
    </ImageLink>
  </Link>
);

export default LogotypeRockInRioFull;
