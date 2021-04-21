import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 120px;
  width: 100%;
  background: ${({ theme }) => theme.elementBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <StyledFooter>Copyright © 2021 Wszelkie prawa zastrzeżone.</StyledFooter>
  );
}

export default Footer;
