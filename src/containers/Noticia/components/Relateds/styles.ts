import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  border-top: solid 2px #164565;
  border-bottom: solid 4px #f6f6f6;
  background-color: #fdfdfd;
  padding: 10px;
`;

export const Title = styled.h3`
  color: #164565;
  margin: 0;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0;
  border-bottom: solid 1px #eaeaea;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border: solid 2px #ffffff;
  min-width: 160px;
  width: 100%;
  margin: 0 0 16px 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    min-width: 250px;
    width: 250px;
    margin: 0 16px 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    min-width: 160px;
    width: 160px;
  }
`;

export const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsTitle = styled.h5`
  font-weight: normal;
  font-size: 24px;
  color: #164565;
  line-height: normal;
  margin: 0;

  & a {
    color: #164565;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const NewsResume = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #666666;
  margin: 8px 0 0 0;

  & a {
    color: #666666;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
