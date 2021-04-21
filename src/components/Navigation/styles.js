import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  z-index: 100;
  display: flex;
  background: transparent;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    align-items: center;
    justify-content: center;
    max-width: 1110px;
    margin: auto;
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.separatorColor};
    border-bottom: 1px solid ${({ theme }) => theme.separatorColor};
  }
`;

export const NavBg = styled.div`
  background: ${({ theme }) => theme.elementBackgroundColor};
  width: 100%;
`;

export const NavItems = styled.ul`
  position: fixed;
  top: 0;
  margin-top: 0;
  height: 100%;
  z-index: 10000;
  background: white;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  transition: all 1s;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    transform: none;
    margin: auto;
    background: transparent;
    position: unset;
    height: 50px;
  }
`;

export const NavItem = styled(NavLink)`
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  padding: 10px 0 10px 0;
  font-family: ${({ theme }) => theme.mainFontFamily};

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    text-align: start;
  }

  &:nth-child(5) {
    @media (min-width: ${({ theme }) => theme.tablet}) {
      text-align: end;
    }
  }

  &:nth-child(6) {
    @media (min-width: ${({ theme }) => theme.tablet}) {
      text-align: end;
    }
  }
`;

export const BurgerButton = styled.div`
  width: 20px;
  height: 20px;
  position: fixed;
  top: 45px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 100000;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, open }) =>
      open ? theme.mainItemBgColor : 'black'};
    transform-origin: -0px;
    transition: all 1s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const DesktopMenuButtons = styled.div`
  display: none;
  position: absolute;
  top: -50px;
  right: 0;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    align-items: center;
  }
`;

export const UserMenuHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  padding: 10px 60px;
  outline: none;
`;

export const UserIconContainer = styled.div`
  min-width: 26px;
  min-height: 26px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.mainItemBgColor};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: invert(100%);
    width: 12px;
  }
`;

export const UserIcon = styled(UserIconContainer)`
  position: absolute;
  left: 15px;
`;

export const ArrowIconContainer = styled.div`
  width: 16px;
  position: absolute;
  right: 8px;
  cursor: pointer;

  img {
    transform: rotate(180deg);
  }
`;

export const UserIdContainer = styled.div``;

export const MobileLogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  border: none;
  padding: 10px 0 15px 0;
  margin-top: 40px;
  text-decoration: underline;

  img {
    margin-left: 5px;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;

  img {
    width: 16px;
    margin-left: 5px;
  }
`;

export const StyledMenu = styled(Menu)`
  && {
    .MuiList-root {
      min-width: 345px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    display: flex;
    padding-left: 60px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    color: ${({ theme }) => theme.userMenuFontColor};
    font-family: ${({ theme }) => theme.secondFontFamily};

    &:nth-child(6) {
      background-color: ${({ theme }) => theme.userMenuItemBgColor};
      padding: 0;
      position: absolute;
      bottom: 20px;
      width: 80%;
      border-radius: 4px;
      align-self: center;
      justify-content: center;
      font-weight: bold;
    }
  }
`;
