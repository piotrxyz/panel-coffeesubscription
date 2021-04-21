import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideNav = styled.nav`
  display: none;
  min-width: 230px;
  width: 255px;

  @media screen and (min-width: ${({ theme }) => theme.desktopSm}) {
    display: block;
  }
`;

export const NavItems = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled(NavLink)`
  padding: 30px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};

  &.active {
    color: ${({ theme }) => theme.mainItemBgColor};
  }

  &:nth-child(6) {
    border: none;
  }
`;
