import React from 'react';
import { SideNav, NavItems, NavItem } from './styles';
import SIDE_MENU_ITEMS from '../../constants/sideMenuItems';

function SideNavigation() {
  return (
    <>
      <SideNav>
        <NavItems>
          {SIDE_MENU_ITEMS.map((item) => {
            if (item.url) {
              return (
                <NavItem key={item.url} to={item.url}>
                  {item.label}
                </NavItem>
              );
            }
            return null;
          })}
        </NavItems>
      </SideNav>
    </>
  );
}

export default SideNavigation;
