import { constants } from 'src/utils/constants';

import { Container, Item, SocialIcon } from './styles';

const SocialShare = () => (
  <Container>
    <Item>
      <SocialIcon network="twitter" url={constants.URL.EXTERNAL.TWITTER} target="_blank" />
    </Item>
    <Item>
      <SocialIcon network="facebook" url={constants.URL.EXTERNAL.FACEBOOK} target="_blank" />
    </Item>
    <Item>
      <SocialIcon network="youtube" url={constants.URL.EXTERNAL.YOUTUBE} target="_blank" />
    </Item>
    <Item>
      <SocialIcon network="instagram" url={constants.URL.EXTERNAL.INSTAGRAM} target="_blank" />
    </Item>
    <Item>
      <SocialIcon network="whatsapp" url={constants.URL.EXTERNAL.WHATSAPP} target="_blank" />
    </Item>
  </Container>
);

export default SocialShare;
