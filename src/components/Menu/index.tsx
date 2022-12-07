import Link from 'next/link';
import { useCallback } from 'react';

import Logotype from 'src/components/Logotype';
import SocialShare from 'src/components/SocialShare';
import { constants } from 'src/utils/constants';

import { Wrapper, Container, TextLink, Header, SubHeader, Body, ButtonClose, ContentLogotype } from './styles';

const { ROUTE } = constants;

export interface IMenu {
  onClose?: () => void;
}

export const Menu = ({ onClose }: IMenu) => {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <Wrapper onClick={handleClose}>
      <Container>
        <Header>
          <ContentLogotype>
            <Logotype />
          </ContentLogotype>
          <ButtonClose onClick={handleClose}>Fechar</ButtonClose>
        </Header>
        <SubHeader>
          <SocialShare />
        </SubHeader>
        <Body>
          <Link href={ROUTE.HOME} passHref>
            <TextLink onClick={handleClose}>Capa</TextLink>
          </Link>
          <Link href={ROUTE.NA_HORA} passHref>
            <TextLink onClick={handleClose}>Na Hora</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.TRENDING_TOPICS} passHref>
            <TextLink onClick={handleClose}>Trendings</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.RIO} passHref>
            <TextLink onClick={handleClose}>Rio</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.BRASIL} passHref>
            <TextLink onClick={handleClose}>Brasil</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.ELEICOES_2022} passHref>
            <TextLink onClick={handleClose} isChild>
              - Eleições 2022
            </TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.MUNDO} passHref>
            <TextLink onClick={handleClose}>Mundo</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.ECONOMIA} passHref>
            <TextLink onClick={handleClose}>Economia</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.ESPORTES} passHref>
            <TextLink onClick={handleClose}>Esportes</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.COPDA_DO_MUNDO} passHref>
            <TextLink onClick={handleClose} isChild>
              - Copa do Mundo
            </TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.CULTURA} passHref>
            <TextLink onClick={handleClose}>Cultura</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.ROCK_IN_RIO} passHref>
            <TextLink onClick={handleClose} isChild>
              - Rock in Rio
            </TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.MIDIA_CIA} passHref>
            <TextLink onClick={handleClose}>Mídia e Cia</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.SAUDE} passHref>
            <TextLink onClick={handleClose}>Saúde</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.EDUCACAO} passHref>
            <TextLink onClick={handleClose}>Educação</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.TURISMO} passHref>
            <TextLink onClick={handleClose}>Turismo</TextLink>
          </Link>
          <Link href={ROUTE.EDITORIA.TECNOLOGIA} passHref>
            <TextLink onClick={handleClose}>Tecnologia</TextLink>
          </Link>
        </Body>
      </Container>
    </Wrapper>
  );
};
