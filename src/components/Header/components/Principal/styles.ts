import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0, 0, 0, 0.02);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: calc(100% - 32px);
  max-width: ${({ theme }) => theme.breakpoint?.lg};
  padding: 16px 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    padding: 24px 16px;
    justify-content: space-between;
  }
`;

export const ContentMenuButton = styled.div`
  order: 1;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex: 1;
  }
`;

export const ContentLogotype = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  order: 2;
  flex: 4;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    max-width: 400px;
    flex: 1;
  }
`;

export const ContentSocialShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  order: 3;
  flex: 1;
`;

export const ContentSocial = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    display: block;
  }
`;
