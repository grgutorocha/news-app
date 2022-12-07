import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    flex-direction: column;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  margin-right: 0;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    min-width: 202px;
    width: 202px;
    margin-right: 16px;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    min-width: 160px;
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DateTime = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin: 0 0 16px 0;
`;

export const Title = styled.h3`
  color: #3881b2;
  font-size: 20px;
  font-weight: normal;
  margin: 0 0 8px 0;

  & a {
    color: #3881b2;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;

  & a {
    color: #666;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
