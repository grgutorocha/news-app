import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  background: rgb(74, 145, 193);
  background: linear-gradient(180deg, rgba(74, 145, 193, 1) 0%, rgba(57, 130, 179, 1) 50%, rgba(56, 129, 178, 1) 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint?.lg};
`;
