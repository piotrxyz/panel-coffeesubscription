import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.elementBackgroundColor};

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    height: 100px;
  }
`;

export const StyledHeaderImg = styled.img`
  width: 225px;
`;

export function HeaderImg() {
  return <StyledHeaderImg src={logo} alt="ALternatywnie logo" />;
}

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderImg src={logo} alt="ALternatywnie logo" />
    </StyledHeader>
  );
}

export default Header;
