import { Copyrights } from 'src/components/Copyrights';

import { Navigation } from './components/Navigation';
import { Wrapper, Container } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation />
        <Copyrights />
      </Container>
    </Wrapper>
  );
};

export default Footer;
