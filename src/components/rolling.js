import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

export const DEFAULT_PROPS = {
  color: '#cccccc',
  strokeThickness: 5,
  size: 30,
  duration: 1,
};

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const LdsRolling = styled.div`
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
  ${({ size }) => `
    transform: translate(-${size / 2}px, -${size / 2}px) scale(1) translate(${size / 2}px, ${size / 2}px);
  `}
`;
const LdsRollingDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  ${({ color, strokeThickness }) => `
    border: ${strokeThickness}px solid ${color};
  `}
  border-top-color: transparent;
  border-radius: 50%;
  ${({ duration }) => css`
    animation: ${rotate} ${duration}s linear infinite;
  `}

  ${({ size }) => `
    top: ${size / 2}px;
    left: ${size / 2}px;
  `}
  box-sizing: border-box;
`;

const Rolling = props => {
  const { color, strokeThickness, size, duration } = props;
  return (
    <LdsRolling size={size}>
      <LdsRollingDiv
        strokeThickness={strokeThickness}
        color={color}
        size={size}
        duration={duration}
      />
    </LdsRolling>
  );
};

Rolling.propTypes = {
  color: PropTypes.string,
  strokeThickness: PropTypes.number,
  size: PropTypes.number,
  duration: PropTypes.number,
};

Rolling.defaultProps = DEFAULT_PROPS;

export default Rolling;
