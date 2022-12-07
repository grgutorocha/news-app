import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: solid 1px #4f96c5;
  padding: 10px 0;
  margin-top: 24px;
`;

export const Text = styled.div`
  font-size: 12px;
  color: #cccccc;
  text-align: center;
  margin: 0;

  &:last-child {
    margin-top: 4px;
  }
`;
