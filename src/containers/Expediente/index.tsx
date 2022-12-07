import GoogleAd from 'src/components/GoogleAd';

import { Wrapper, Container, PageTitle, Section, Body, WrapperContent, Content, Sidebar, Pub } from './styles';

const Expediente = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <PageTitle>Expediente</PageTitle>
          <Body>
            <WrapperContent>
              <Content>
                <p>
                  <strong>REDAÇÃO</strong>
                  <br />
                  <em>Este portal é um produto da agência de notícias Ltda</em>
                </p>
                <p>
                  Dúvidas, reclamações e/ou sugestões: <strong>email@questions.com</strong>
                </p>
                <p>
                  <strong>REDES SOCIAIS</strong>
                </p>
                <p>
                  Twitter:{' '}
                  <a title="Siga-nos" href="https://twitter.com/o_reporter" target="_blank" rel="noreferrer">
                    @a
                  </a>
                  <br />
                  Facebook:{' '}
                  <a title="Pra curtir" href="#" target="_blank" rel="noreferrer">
                    facebook
                  </a>
                  <br />
                  YouTube:{' '}
                  <a
                    title="Para assistir"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    youtbube
                  </a>
                  <br />
                  Instagram:{' '}
                  <a
                    title="Para acompanhar"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @instagram
                  </a>
                </p>
                <p>
                  <strong>Serviço de agências nacionais e internacionais</strong>
                  <br />
                  <em>
                    Agência Brasil, Agência Senado, Agência Brasília, Agência Câmara, Vipcomm, Photocamera, Agif, Getty
                    Images, Agência ANSA, Rádio ONU, Reuters
                  </em>
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

export default Expediente;
