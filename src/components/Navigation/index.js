import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import Burger from './Burger';
import {
  Nav,
  NavBg,
  DesktopMenuButtons,
  UserMenuHeader,
  UserIconContainer,
  UserIdContainer,
  UserIcon,
  ArrowIconContainer,
  MenuButton,
  StyledMenu,
  StyledMenuItem
} from './styles';
import ROUTES from '../../constants/routesUrls';
import downArrow from '../../assets/down-arrow.svg';
import userIcon from '../../assets/user.svg';

function Navigation() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    setAnchorEl(null);
    e.preventDefault();
    cogoToast.loading('Wylogowywanie...').then(() => {
      cogoToast.success('Zostałeś pomyślnie wylogowany');
    });
    setTimeout(() => {
      history.push(ROUTES.app);
    }, 1500);
  };

  return (
    <NavBg>
      <Nav>
        <Burger />
        <DesktopMenuButtons>
          <UserIconContainer>
            <img src={userIcon} alt="user icon" />
          </UserIconContainer>
          <MenuButton onClick={handleClick}>
            <img src={downArrow} alt="menu icon" />
          </MenuButton>
        </DesktopMenuButtons>
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <UserMenuHeader>
            <UserIcon>
              <img src={userIcon} alt="user icon" />
            </UserIcon>
            <UserIdContainer>User</UserIdContainer>
            <ArrowIconContainer onClick={handleClose}>
              <img src={downArrow} alt="menu icon" />
            </ArrowIconContainer>
          </UserMenuHeader>
          <StyledMenuItem>Menu Item 1</StyledMenuItem>
          <StyledMenuItem>Menu Item 2</StyledMenuItem>
          <StyledMenuItem>Panel użytkownika</StyledMenuItem>
          <StyledMenuItem onClick={handleLogout}>Wyloguj</StyledMenuItem>
          <StyledMenuItem>Poleć znajomym</StyledMenuItem>
        </StyledMenu>
      </Nav>
    </NavBg>
  );
}

export default Navigation;
