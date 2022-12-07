import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 900;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #1e3370;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 901;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    width: 360px;
    margin: 16px;
    border-radius: 16px;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    width: 360px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.xl}) {
    width: 360px;
  }
`;

interface ITextLink {
  isChild?: boolean;
}

export const TextLink = styled.a<ITextLink>`
  font-size: 13px;
  font-weight: normal;
  text-transform: uppercase;
  text-decoration: none;
  color: #acb3ca;
  padding: 14px;
  border-bottom: solid 1px #30437b;

  &:hover {
    text-decoration: underline;
  }

  ${({ isChild }) => {
    return (
      isChild &&
      css`
        background: #17295e;
        color: #acb3ca87;
      `
    );
  }}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: calc(100% - 32px);
  background: #ffffff;
  border-bottom: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    border-radius: 16px 16px 0 0;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  width: calc(100% - 32px);
  background: #f2f2f2;
  border-bottom: solid 1px #cccccc;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  background-color: #1e3370;
  width: 100%;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    border-radius: 0 0 16px 16px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: calc(100% - 16px);
  background: #ffffff;
  border-top: solid 1px #cccccc;
`;

export const ContentLogotype = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 200px;
`;

export const ButtonClose = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
  }
`;
