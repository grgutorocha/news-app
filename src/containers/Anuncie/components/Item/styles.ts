import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Example = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: #f4f4f4;

  & strong {
    margin-bottom: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #e4e4e4;
  padding: 16px;

  & p {
    margin: 0;
  }
`;
