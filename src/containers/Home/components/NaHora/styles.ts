import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const Title = styled.h5`
  font-weight: bold;
  font-size: 20px;
  color: #164565;
  margin: 0;

  & span {
    color: #999;
    font-weight: normal;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: calc(100% - 32px);
  border-radius: 3px;
  border: 1px solid #eaeaea;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 8px 0;
`;

export const AllNewsLink = styled.a`
  padding: 3px 10px;
  width: max-content;
  display: block;
  font-size: 11px;
  color: #333;
  background: #eaeaea;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: #d2d2d2;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: solid 1px #eaeaea;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    width: 100%;
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: 20%;
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
