import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: 'Suez One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #000000;
  border: none;
  background: none;

  & > span {
    margin-left: 4px;
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    & > span {
      margin-left: 4px;
      display: inline-block;
    }
  }
`;
