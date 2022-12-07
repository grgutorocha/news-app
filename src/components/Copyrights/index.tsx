import { format } from 'date-fns';
import { Container, Text } from './styles';

export const Copyrights = () => (
  <Container>
    <Text>{`O Repórter.com | © Copyright 2009-${format(new Date(), 'yyyy')}. Todos os direitos reservados.`}</Text>
    <Text>
      É proibida a reprodução do conteúdo desta página em qualquer meio de comunicação, eletrônico ou impresso, sem
      autorização escrita de O Repórter.com Ltda Me.
    </Text>
  </Container>
);
