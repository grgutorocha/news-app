import GoogleAd from 'src/components/GoogleAd';

import { FormView } from './Form';
import { Wrapper, Container, PageTitle, Section, Body, WrapperContent, Content, Sidebar, Pub } from './styles';

const TrabalheConosco = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <PageTitle>Trabalhe Conosco</PageTitle>
          <Body>
            <WrapperContent>
              <Content>
                <FormView />
              </Content>
              <Sidebar>
                <GoogleAd name="half-page" slot="999999" />
              </Sidebar>
            </WrapperContent>
          </Body>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default TrabalheConosco;
