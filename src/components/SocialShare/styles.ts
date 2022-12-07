import styled from 'styled-components';
import { SocialIcon as SocialIconUI } from 'react-social-icons';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  font-style: italic;
  color: #999999;
  padding: 8px 4px;
`;

export const Item = styled.div`
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SocialIcon = styled(SocialIconUI)`
  width: 24px !important;
  height: 24px !important;
`;
