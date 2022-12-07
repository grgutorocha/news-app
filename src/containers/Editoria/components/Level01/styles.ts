import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  margin: 0 0 11px 0;
  font-size: 32px;
  font-weight: bold;
  color: #164565;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    font-size: 48px;
    line-height: 56px;
  }

  & a {
    color: #164565;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;

  & a {
    color: #666;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
