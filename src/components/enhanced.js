import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from { opacity 0; }
  to { opacity 1; }
`;

const EnhancedComponent = ({ component, fadeIn, ...rest }) => {
  const Component = !fadeIn
    ? component
    : styled(component)`
      animation: ${fadeInAnimation} .5s linear;
    `;
  return <Component {...rest} />;
};

EnhancedComponent.propTypes = {
  component: PropTypes.func,
  fadeIn: PropTypes.bool.isRequired,
};

EnhancedComponent.defaultProps = {
  component: null,
};


export default EnhancedComponent;
