import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import { BurgerButton, NavItems, NavItem, MobileLogoutButton } from './styles';
import ROUTES from '../../constants/routesUrls';
import MENU_ITEMS from '../../constants/menuItems';

const Burger = () => {
  const history = useHistory();

  const handleLogOut = (e) => {
    e.preventDefault();
    cogoToast.loading('Wylogowywanie...').then(() => {
      cogoToast.success('Zostałeś pomyślnie wylogowany');
    });
    setTimeout(() => {
      history.push(ROUTES.app);
    }, 1500);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerButton open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </BurgerButton>
      <NavItems open={open}>
        {MENU_ITEMS.map((item) => {
          if (item.url) {
            return (
              <NavItem key={item.url} to={item.url}>
                {item.label}
              </NavItem>
            );
          }
          return null;
        })}
        <MobileLogoutButton onClick={handleLogOut}>Wyloguj</MobileLogoutButton>
      </NavItems>
    </>
  );
};

export default Burger;
