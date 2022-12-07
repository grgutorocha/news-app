import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #164565;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  background: #164565;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
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
  border-bottom: solid 1px #ebebeb;
  padding: 8px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin: 0 0 4px 0;
  padding: 0;
  color: #2388c2;

  & a {
    color: #2388c2;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;
