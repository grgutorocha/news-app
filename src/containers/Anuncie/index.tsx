import GoogleAd from 'src/components/GoogleAd';

import Item from './components/Item';
import { Wrapper, Container, PageTitle, Section, Body, WrapperContent, Content, Sidebar, Pub } from './styles';

const Anuncie = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <PageTitle>Anuncie</PageTitle>
          <Body>
            <WrapperContent>
              <Content>
                <p>
                  Para informações sobre formatos de publicidade, preços e negociações entre em contato pelo e-mail:
                  news@app.com.
                </p>
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

export default Anuncie;
