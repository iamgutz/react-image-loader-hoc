import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const DEFAULT_PROPS = {
  color: '#cccccc',
  size: 40,
};

const CloudOff = props => {
  const { color, size } = props;
  return (
    <Wrap size={size}>
      <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65zM196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z" />
      </svg>
    </Wrap>
  );
};

CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

CloudOff.defaultProps = DEFAULT_PROPS;

const Wrap = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
`;

export default CloudOff;
