import { differenceInDays, format } from 'date-fns';

import LogotypeRockInRio from '../LogotypeRockInRio';
import { Container, Logo, Text, Countdown } from './styles';

const diasDeShow: { [key: string]: string } = {
  '2022-09-02': '1º Dia',
  '2022-09-03': '2º Dia',
  '2022-09-04': '3º Dia',
  '2022-09-08': '4º Dia',
  '2022-09-09': '5º Dia',
  '2022-09-10': '6º Dia',
  '2022-09-11': '7º Dia',
};

const disasSemShow: { [key: string]: string } = {
  '2022-09-05': 'Rock!',
  '2022-09-06': 'Rock!',
  '2022-09-07': 'Rock!',
};

const lastDay = '2022-09-11';

const ContagemRegressiva = () => {
  const contagem = differenceInDays(new Date('2022-09-03'), new Date());

  const getContent = (contagemDeDias: number) => {
    const currentDay = format(new Date(), 'yyyy-MM-dd');

    if (differenceInDays(new Date(currentDay), new Date(lastDay)) > 0) {
      return (
        <>
          <span>Veja como</span>
          <p>foi!</p>
        </>
      );
    }

    if (disasSemShow[currentDay]) {
      return <p>{disasSemShow[currentDay]}</p>;
    }

    if (diasDeShow[currentDay]) {
      return <p>{diasDeShow[currentDay]}</p>;
    }

    if (contagemDeDias === 0) {
      return <p>É hoje!</p>;
    }

    if (contagemDeDias === 1) {
      return (
        <>
          <span>Falta</span>
          <p>{contagemDeDias} dia</p>
        </>
      );
    }

    return (
      <>
        <span>Faltam</span>
        <p>{contagemDeDias} dias</p>
      </>
    );
  };

  return (
    <Container>
      <Logo>
        <LogotypeRockInRio />
      </Logo>
      <Text>
        De Iron Maiden a Dua Lipa. Passaram pela Cidade do Rock 670 artistas. Foram mais de 250 shows e 500 horas de
        entretenimento. Vem conferir!
      </Text>
      <Countdown>{getContent(contagem)}</Countdown>
    </Container>
  );
};

export default ContagemRegressiva;
