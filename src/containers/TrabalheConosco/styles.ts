import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 48px 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint?.lg};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
`;

export const PageTitle = styled.h1`
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: normal;
  color: #164565;
`;

export const Body = styled.div`
  color: #333;
  font-size: 14px;
  width: 100%;

  & > p {
    margin: 0 0 20px 0;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & p {
    font-weight: normal;
  }
`;

export const Sidebar = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 24px;
  }
`;

interface IPubProps {
  width: number;
  height: number;
}

export const Pub = styled.div<IPubProps>`
  background-color: #00000010;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
