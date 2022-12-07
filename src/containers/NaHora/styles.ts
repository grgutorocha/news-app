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
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    flex-direction: row;
  }
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

  & > p {
    margin: 0 0 20px 0;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: 300px;
    margin-left: 24px;
    margin-top: 0;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
