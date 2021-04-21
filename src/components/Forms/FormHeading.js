import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingStyled = styled.div`
  font-family: ${({ theme }) => theme.mainFontFamily};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const FormHeading = ({ title }) => <HeadingStyled>{title}</HeadingStyled>;

FormHeading.propTypes = {
  title: PropTypes.string.isRequired
};

export default FormHeading;
