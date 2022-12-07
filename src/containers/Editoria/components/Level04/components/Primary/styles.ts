import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const Info = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-bottom: solid 2px #1f3471;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  color: #000000;
  margin: 0 0 8px 0;

  & a {
    color: #000000;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
