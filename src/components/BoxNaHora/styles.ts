import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #164565;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: #164565;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
`;

export const Subtitle = styled.h3`
  margin: 4px 0 0 0;
  font-size: 16px;
  font-weight: normal;
  color: #eeeeee;

  & a {
    font-size: 16px;
    color: #164565;
    text-transform: none;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  border-bottom: solid 1px #ebebeb;
  padding: 8px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemSkeleton = styled(Item)`
  flex-direction: column;
`;

export const ItemNumber = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #e4e4e4;
  padding-right: 16px;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 4px 0;
  padding: 8px 0;
  color: #164565;

  & a {
    color: #164565;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
