import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0 16px 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex-direction: column;
    margin: 0 16px 0 0;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    min-width: 260px;
    width: 260px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    min-width: 100%;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    min-width: 260px;
    width: 260px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-bottom: solid 2px #1f3471;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 22px;
  font-weight: normal;
  color: #000000;
  margin: 0;

  & a {
    color: #000000;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    font-size: 20px;
  }
`;
