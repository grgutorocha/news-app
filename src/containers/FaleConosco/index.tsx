import GoogleAd from 'src/components/GoogleAd';

import { FormView } from './Form';
import { Wrapper, Container, PageTitle, Section, Body, WrapperContent, Content, Sidebar, Pub } from './styles';

const FaleConosco = () => (
  <Wrapper>
    <Container>
      <Section>
        <PageTitle>Fale Conosco</PageTitle>
        <Body>
          <WrapperContent>
            <Content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis quam vitae libero placerat convallis. Ut magna mi, lobortis eget consectetur a, scelerisque eu diam. Nulla facilisi. Suspendisse ac imperdiet mauris, sed blandit elit. Vestibulum tincidunt neque a ligula aliquam viverra. In hac habitasse platea dictumst. Phasellus sed pulvinar neque. Phasellus aliquet felis dolor, sed molestie risus accumsan sed. Nunc vehicula ligula mauris, aliquet convallis nisi malesuada ut. Praesent eu pulvinar mi, vel egestas erat. Donec nibh erat, varius ut sollicitudin et, maximus et nibh. Suspendisse ex arcu, gravida quis ultrices ac, facilisis a diam. Duis rutrum, dui sed pellentesque dapibus, dui mauris dignissim quam, quis vehicula neque eros eget urna. Donec sit amet facilisis justo. Nunc feugiat tellus turpis, congue faucibus quam facilisis eu. Mauris sed vestibulum odio.
                </p>
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

export default FaleConosco;
