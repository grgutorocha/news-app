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

export const WrapperContentLevel11 = styled(WrapperContent)`
  padding: 0 0 24px 0;
  width: 100%;
  max-width: none;
`;

export const Level0102EmptySpacer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    display: flex;
    height: 24px;
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
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 24px;
  }
`;
