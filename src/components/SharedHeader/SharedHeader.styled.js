import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  height: 50px;
  background-color: ${p => p.theme.colors.bgHeader};
  border-bottom: 1px solid tomato;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`

export const MainLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)};
  border-radius: 10px;
  color: white;

  &.active,
  :hover {
    background-color: white;
    color: black;
  }
`