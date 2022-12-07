import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  position: relative;
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  position: absolute;
  z-index: 2;
  top: 8px;
  right: 8px;
  border-radius: 16px;
  padding: 4px 8px;
  color: #dddddd;
  background: #164565;
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
