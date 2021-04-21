import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  && {
    align-self: center;
    width: 100%;
    background-color: ${({ theme }) => theme.userMenuItemBgColor};
    border-color: ${({ theme }) => theme.userMenuItemBgColor};
    color: #353535;
    font-size: 16px;
    font-weight: bold;
    text-transform: none;

    @media (min-width: ${({ theme }) => theme.tablet}) {
      margin-top: 30px;
    }

    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.3;
      `}
  }
`;

const SubmitBtn = (props) => {
  const { title } = props;
  return (
    <StyledButton {...props} type="submit">
      {title}
    </StyledButton>
  );
};

SubmitBtn.propTypes = {
  title: PropTypes.string.isRequired
};

export default SubmitBtn;
