import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../context';

export default function Square() {
  const { state } = useContext(AppContext);
  const { width, height, rotate, activeColor } = state;

  return (
    <SquareStyle
      className="square"
      width={width}
      height={height}
      rotate={rotate}
      activeColor={activeColor}
    />
  );
}

// Update the square styles based on the context using props
const SquareStyle = styled.div`
  background: ${props => props.activeColor};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  transform: ${props => `rotate(${props.rotate}deg)`};
`;
