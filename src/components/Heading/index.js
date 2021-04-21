import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 15px;
  line-height: 30px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.desktopSm}) {
    max-width: 1110px;
    margin: 0px auto;
    font-size: 32px;
    line-height: 120px;
    text-align: start;
  }
`;

const Heading = (props) => {
  const { title } = props;
  return <StyledHeading {...props}>{title}</StyledHeading>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired
};

export default Heading;
