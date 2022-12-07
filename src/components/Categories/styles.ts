import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: rox;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TextLink = styled.a`
  font-size: 11px;
  color: #666;
  text-transform: uppercase;
`;
