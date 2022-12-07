import Link from 'next/link';

import { constants } from 'src/utils/constants';

import { Container, Column, Title, Body, TextLink } from './styles';

const { ROUTE, URL } = constants;

export const Navigation = () => (
  <Container>
    <Column>
      <Title>O Repórter</Title>
      <Body>
        <Link href={ROUTE.QUEM_SOMOS} passHref>
          <TextLink>Quem Somos</TextLink>
        </Link>
        <Link href={ROUTE.FALE_CONOSCO} passHref>
          <TextLink>Fale Conosco</TextLink>
        </Link>
        <Link href={ROUTE.O_REPORTER_E_VOCE} passHref>
          <TextLink>O Repórter é Você</TextLink>
        </Link>
        <Link href={ROUTE.EXPEDIENTE} passHref>
          <TextLink>Expediente</TextLink>
        </Link>
        <Link href={ROUTE.TRABALHE_CONOSCO} passHref>
          <TextLink>Trabalhe Conosco</TextLink>
        </Link>
        <Link href={ROUTE.ANUNCIE} passHref>
          <TextLink>Anuncie</TextLink>
        </Link>
      </Body>
    </Column>
    <Column>
      <Title>Editorias</Title>
      <Body>
        <Link href={ROUTE.HOME} passHref>
          <TextLink>Capa</TextLink>
        </Link>
        <Link href={ROUTE.NA_HORA} passHref>
          <TextLink>Na Hora</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.TRENDING_TOPICS} passHref>
          <TextLink>Trendings</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.RIO} passHref>
          <TextLink>Rio</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.BRASIL} passHref>
          <TextLink>Brasil</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.ELEICOES_2022} passHref>
          <TextLink isChild>- Eleições 2022</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.MUNDO} passHref>
          <TextLink>Mundo</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.ECONOMIA} passHref>
          <TextLink>Economia</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.ESPORTES} passHref>
          <TextLink>Esportes</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.COPDA_DO_MUNDO} passHref>
          <TextLink isChild>- Copa do Mundo</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.CULTURA} passHref>
          <TextLink>Cultura</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.ROCK_IN_RIO} passHref>
          <TextLink isChild>- Rock in Rio</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.MIDIA_CIA} passHref>
          <TextLink>Mídia e Cia</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.SAUDE} passHref>
          <TextLink>Saúde</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.EDUCACAO} passHref>
          <TextLink>Educação</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.TURISMO} passHref>
          <TextLink>Turismo</TextLink>
        </Link>
        <Link href={ROUTE.EDITORIA.TECNOLOGIA} passHref>
          <TextLink>Tecnologia</TextLink>
        </Link>
      </Body>
    </Column>
    <Column>
      <Title>Redes Sociais</Title>
      <Body>
        <TextLink href={URL.EXTERNAL.TWITTER} target="_blank">
          Twitter
        </TextLink>
        <TextLink href={URL.EXTERNAL.FACEBOOK} target="_blank">
          Facebook
        </TextLink>
        <TextLink href={URL.EXTERNAL.YOUTUBE} target="_blank">
          YouTube
        </TextLink>
        <TextLink href={URL.EXTERNAL.INSTAGRAM} target="_blank">
          Instagram
        </TextLink>
        <TextLink href={URL.EXTERNAL.WHATSAPP} target="_blank">
          Whatsapp
        </TextLink>
      </Body>
    </Column>
  </Container>
);
