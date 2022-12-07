import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(56, 129, 178);
  background: linear-gradient(0deg, rgba(56, 129, 178, 1) 0%, rgba(75, 146, 194, 1) 50%, rgba(56, 129, 178, 1) 100%);
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid #6aaad6;
  padding: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: calc(100% - 32px);

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: solid 1px #6aaad6;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    width: 100%;
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    width: 46%;
    justify-content: space-between;

    &:last-child {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: solid 1px #6aaad6;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: 22%;
    flex-direction: column;
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
    justify-content: flex-start;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  border: solid 2px #ffffff;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    min-width: 202px;
    width: 202px;
    margin-right: 16px;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    min-width: 160px;
    width: 160px;
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    min-width: 160px;
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h5`
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
  margin: 0;

  & a {
    color: #ffffff;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
