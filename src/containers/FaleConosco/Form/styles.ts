import styled from 'styled-components';

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 24px;

  & label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 4px;
    padding-left: 4px;
  }

  & input,
  & select,
  & textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #333333;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
  }

  & input,
  & select {
    height: 32px;
    padding: 0 8px;
  }

  & textarea {
    padding: 8px;
  }
`;

export const ButtonSubmit = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #ffffff;
  border: solid 1px #1c5172;
  border-radius: 5px;
  background: #1c5172;
  padding: 10px 32px;
  height: auto;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ErrorMessageStyled = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #ff3333;
  padding: 4px 8px 0 8px;
`;
