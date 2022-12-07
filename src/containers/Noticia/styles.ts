import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding: 48px 0;
`;

export const WrapperFull = styled(Wrapper)`
  width: 100%;
  margin-bottom: 32px;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    max-width: ${({ theme }) => theme.breakpoint?.lg};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0 24px;
  width: calc(100% - 48px);
  max-width: ${({ theme }) => theme.breakpoint?.lg};
  margin-bottom: 32px;
  color: #333;
  font-size: 14px;
`;

export const WrapperContentSidebar = styled(WrapperContent)`
  flex-direction: column;
  width: auto;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & p {
    font-weight: normal;
    margin: 0 0 20px 0;
  }
`;

export const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    width: 300px;
    margin-left: 24px;
    margin-top: 0;
  }
`;

export const EditorialLink = styled.h4`
  margin: 0 0 16px 0;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #999;
  text-transform: uppercase;

  & a {
    color: #999;
    text-decoration: underline;
  }

  & a:hover {
    color: #999;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #164565;
  margin: 0 0 16px 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const Resume = styled.h3`
  font-size: 24px;
  font-weight: normal;
  color: #999999;
  margin: 0 0 24px 0;
  line-height: normal;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 24px 0 12px 0;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #999999;
`;

export const InfoAvatar = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const InfoAvatarImage = styled(Image).attrs({
  width: '48px',
  height: '48px',
})`
  -webkit-border-radius: 50% 50%;
  -moz-border-radius: 50% 50%;
  border-radius: 50% 50%;
`;

export const InfoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InfoAuthor = styled.div`
  color: #666666;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
`;

export const InfoPublishDate = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 4px;
  font-size: 14px;
`;

export const InfoUpdateDate = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: 14px;
`;

export const SocialShare = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    margin-top: 0;
  }
`;

export const SocialShareTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    justify-content: flex-end;
  }
`;

export const SocialShareList = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;

  & button {
    margin-left: 6px;

    &:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    justify-content: flex-end;
  }
`;

export const TextContent = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 24px;

  & img {
    width: 100%;
  }

  & b,
  & strong {
    color: #164565;
  }

  & a,
  & a > strong {
    font-weight: bold;
    text-decoration: none;
    color: #2388c2;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

interface IVerticalSpacerProps {
  height?: number | string;
}

export const VerticalSpacer = styled.div<IVerticalSpacerProps>`
  float: none;
  height: ${({ height }) => (height ? `${height}px` : '24px')};
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    margin-bottom: 24px;
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.sm}) {
    flex-direction: row;

    & > div {
      margin-bottom: 0;
      margin-right: 24px;
    }

    & > div:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.lg}) {
    flex-direction: column;

    & > div {
      margin-bottom: 24px;
      margin-right: 0;
    }

    & > div:last-child {
      margin-bottom: 0;
    }
  }
`;
