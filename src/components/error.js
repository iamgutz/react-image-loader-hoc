import React from 'react';
import PropTypes from 'prop-types';
import CloudOff from './cloud-off';
import Placeholder from './placeholder';

const Error = ({ component, width, height }) => {
  const Component = component || CloudOff;
  return (
    <Placeholder width={width} height={height}>
      <Component />
    </Placeholder>
  );
};

Error.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.node,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
};

Error.defaultProps = {
  component: null,
  width: null,
  height: null,
};


export default Error;
