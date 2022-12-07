import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 24px 24px 24px;
  width: calc(100% - 48px);

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    padding: 0 0 24px 0;
    width: 100%;
  }

  max-width: ${({ theme }) => theme.breakpoint?.lg};
`;

export const WrapperContentPubTop = styled(WrapperContent)`
  padding-top: 24px;
`;

export const WrapperContentLevel0102 = styled(WrapperContent)`
  padding-top: 24px;
`;

export const WrapperContentLevel03 = styled(WrapperContent)`
  padding: 0 0 24px 0;
  width: 100%;
`;

export const Level0102EmptySpacer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    display: flex;
    height: 24px;
  }
`;

export const WrapperContentSidebar = styled(WrapperContent)`
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: 300px;
    margin-left: 24px;
    margin-top: 0;
  }
`;

export const PageTitle = styled.h1`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 8px 0;
  background-color: #1e3370;
  font-size: 24px;
  font-weight: normal;
  color: #ffffff;
`;

export const TextLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface IPubProps {
  width: number;
  height: number;
}

export const Pub = styled.div<IPubProps>`
  background-color: #00000010;
  width: 250px;
  height: 250px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    height: 400px;
    height: 250px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    width: 600px;
    height: 250px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const VerticalSpacer = styled.div`
  height: 24px;
`;
