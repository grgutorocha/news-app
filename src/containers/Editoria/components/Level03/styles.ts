import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 496px;
  position: relative;
`;

export const Info = styled.div`
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  border-top: none;
  border-bottom: solid 2px #1f3471;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: normal;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.5px;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    text-align: left;
    font-size: 32px;
  }

  & a {
    color: #ffffff;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
