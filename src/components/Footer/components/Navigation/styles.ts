import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex: 1;
    border-right: solid 1px #4f96c5;
    margin-right: 24px;
    padding-right: 24px;

    &:last-child {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
  }
`;

export const Title = styled.h6`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 12px 0;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ITextLink {
  isChild?: boolean;
}

export const TextLink = styled.a<ITextLink>`
  font-size: 13px;
  font-weight: normal;
  text-decoration: none;
  color: #ffffff;
  margin: 0 0 4px 0;
  width: max-content;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${({ isChild }) => {
    return (
      isChild &&
      css`
        color: #22bfe6;
        margin-left: 8px;
      `
    );
  }}
`;
