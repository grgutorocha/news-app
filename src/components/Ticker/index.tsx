import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Wrapper, Container, Label, TextLink, News, NewsTitle, Message } from './styles';
import { constants } from 'src/utils/constants';
import { naHoraService } from 'src/api/services/naHora';
import { helpers } from 'src/utils/helpers';

const TIMER = 7000;

export const Ticker = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [list, setList] = useState<INaHoraItem[]>([]);
  const [current, setCurrent] = useState<INaHoraItem>({} as INaHoraItem);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      setErrorMessage('');

      try {
        const { data } = await naHoraService.getForTicker();

        setList(data.data);
      } catch (error) {
        console.log(error);
        setErrorMessage('Não foi possível carregar as notícias.');
      } finally {
        setLoading(false);
      }
    };

    get();
  }, []);

  useEffect(() => {
    let add = 0;

    setCurrent(list[add]);

    const interval = setInterval(() => {
      add = add >= list.length - 1 ? 0 : add + 1;

      setCurrent(list[add]);
    }, TIMER);

    return () => clearInterval(interval);
  }, [list]);

  return (
    <Wrapper>
      <Container>
        <Label>
          <Link href={constants.ROUTE.NA_HORA} passHref>
            <TextLink>Na Hora</TextLink>
          </Link>
        </Label>
        <News>
          {loading ? (
            <Message>Atualizando notícias...</Message>
          ) : (
            <>
              {Boolean(errorMessage) ? (
                <Message>{errorMessage}</Message>
              ) : (
                <>
                  {Boolean(current && current.not_id) && (
                    <Link href={helpers.mountNewsUrl(current.not_tit, current.not_id)} passHref>
                      <NewsTitle>
                        {helpers.formatNewsDate(`${current.not_data}T${current.not_hora}`)} - {current.not_tit}
                      </NewsTitle>
                    </Link>
                  )}
                </>
              )}
            </>
          )}
        </News>
      </Container>
    </Wrapper>
  );
};
