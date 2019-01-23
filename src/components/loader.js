import React from 'react';
import PropTypes from 'prop-types';
import Rolling from './rolling';
import Placeholder from './placeholder';

const Loader = ({ component, width, height }) => {
  const Component = component || Rolling;
  return (
    <Placeholder width={width} height={height}>
      <Component />
    </Placeholder>
  );
};

Loader.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.node,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
};

Loader.defaultProps = {
  component: null,
  width: null,
  height: null,
};


export default Loader;
