import styled, { css } from 'styled-components';
import Image from 'next/image';

interface IContainerProps {
  position?: PositionType;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 24px 0;

  ${({ position }) =>
    position === 'Direita' &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
        width: 360px;
        float: right;
        margin: 16px 0 24px 24px;
      }

      @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
        width: 360px;
      }
    `}

  ${({ position }) =>
    position === 'Esquerda' &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
        width: 360px;
        float: left;
        margin: 16px 24px 24px 0;
      }

      @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
        width: 360px;
      }
    `}
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  & > div {
    position: unset !important;
  }
`;

export const ImageNext = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;

  &:hover {
    cursor: pointer;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: normal;
  background: #eaeaea;
`;
