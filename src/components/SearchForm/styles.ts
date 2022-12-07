import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 900;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #ededed;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 901;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    height: max-content;
    margin: 0;
    border-radius: 0;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.xl}) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: calc(100% - 32px);
  background: #ffffff;
  border-bottom: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    border-radius: 16px 16px 0 0;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 200px;
  margin: 0;
`;

export const ButtonClose = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: normal;

  &:hover {
    cursor: pointer;
  }
`;

export const Search = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
  padding: 16px;
  width: calc(100% - 32px);

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 8px 16px;
  font-size: 16px;
  color: #333333;
  display: flex;
  flex: 1;
  min-height: 65px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    min-height: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #18295c;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  height: auto;
  margin: 8px 0 0 0;
  padding: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: #18295c;
    border: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    margin: 0 0 0 8px;
  }
`;

export const ButtonCancel = styled(Button)`
  background-color: #2188c1;
`;
