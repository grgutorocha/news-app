import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000000;
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Text = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 100px;
    font-size: 16px;
    font-weight: 400;
    color: #818281;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;

  & span {
    font-size: 12px;
    font-weight: 400;
    color: #818281;
    text-align: left;
  }

  & p {
    margin: 0;
  }
`;
