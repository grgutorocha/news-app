import Image from 'next/image';
import Link from 'next/link';

import { constants } from 'src/utils/constants';

import { ImageLink } from './styles';

const Logotype = () => (
  <Link href={constants.ROUTE.HOME} passHref>
    <ImageLink>
      <Image src="/image/logo-o-reporter-menor.png" alt="O Repórter" width="352" height="46" />
    </ImageLink>
  </Link>
);

export default Logotype;
