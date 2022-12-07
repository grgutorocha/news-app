import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border-bottom: solid 1px #eeeeee;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint?.lg};
`;

export const DateDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  font-style: italic;
  color: #999999;
  padding: 8px 4px;
`;

export const SocialShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  font-style: italic;
  color: #999999;
  padding: 8px 4px;
`;

export const SocialShareItem = styled.div`
  margin-left: 4px;
`;
