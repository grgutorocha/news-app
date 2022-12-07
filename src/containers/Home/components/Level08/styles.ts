import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  border-top: 1px solid #eaeaea;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    width: 46%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    width: 46%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: 315px;

    &:last-child {
      padding-bottom: 20px;
      border-bottom: 1px solid #eaeaea;
    }
  }
`;

export const ImageWrapper = styled.div`
  min-width: 170px;
  width: 170px;
  height: auto;
  margin-right: 10px;
  position: relative;
`;

export const Title = styled.h5`
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  color: #164565;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    font-size: 16px;
    line-height: 19px;
  }

  & a {
    color: #164565;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
