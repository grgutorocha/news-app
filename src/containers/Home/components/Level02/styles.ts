import styled from 'styled-components';

export const List = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 12px 0;
  margin-bottom: 0;
  border-bottom: 1px solid #eaeaea;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: normal;
  color: #3881b2;
  background: url('/image/bullet_menu.png') no-repeat;
  padding-left: 13px;

  & a {
    color: #3881b2;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint?.md}) {
    width: 30%;
  }
`;
