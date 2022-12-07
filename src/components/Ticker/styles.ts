import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #9fd0f1;
  background: linear-gradient(180deg, #9fd0f1 0%, #6babd7 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint?.lg};
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  background: #3881b2;
  width: max-content;
  padding: 6px 8px;
`;

export const TextLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
  border-left: solid 1px #ffffff;
  padding: 6px 8px;
  -webkit-box-shadow: inset 23px 0px 15px -20px rgba(0, 0, 0, 0.12);
  box-shadow: inset 23px 0px 15px -20px rgba(0, 0, 0, 0.12);
`;

export const NewsTitle = styled.a`
  font-size: 12px;
  color: #ffffff;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Message = styled.span`
  font-size: 12px;
  color: #ffffff;
`;
