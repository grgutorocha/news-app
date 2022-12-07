import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid #f1f1f1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: normal;
  color: #164565;
  margin: 0 0 4px 0;
`;

export const TextLink = styled.a`
  color: #164565;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const DateHour = styled.h3`
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
  color: #666666;
  margin: 0 0 7px 0;
`;

export const Resume = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #666666;
  margin-top: 8px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  margin-right: 0;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    min-width: 202px;
    width: 202px;
    margin-right: 16px;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    min-width: 250px;
    width: 250px;
    height: 148px;
  }
`;
