import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.mainFontFamily};
  padding: 10px;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  transition: all 500ms ease;
  background: ${({ theme }) => theme.mainItemBgColor};
  color: white;
  font-weight: bold;

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: 155px;
    margin-bottom: 0;
  }

  ${(props) =>
    props.primary &&
    css`
      margin-bottom: 10px;
      border: 2px solid transparent;
      width: 195px;

      @media screen and (min-width: ${({ theme }) => theme.tablet}) {
        width: 195px;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      margin-bottom: 0;
      background: white;
      color: ${({ theme }) => theme.mainItemBgColor};
      border: 2px solid;
      width: 195px;

      @media screen and (min-width: ${({ theme }) => theme.tablet}) {
        width: 195px;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`;

const Button = (props) => {
  const { title } = props;
  return <StyledButton {...props}>{title}</StyledButton>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
