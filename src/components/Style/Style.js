import React, { useContext, useState } from 'react';
import InputRange from 'react-input-range';
import styled, { createGlobalStyle } from 'styled-components';

import 'react-input-range/lib/css/index.css';

import { StyleContext } from '../../context';
import Square from '../Square';

export default function Style() {
  const style = useContext(StyleContext);
  const [width, setWidth] = useState(style.width);
  const [height, setHeight] = useState(style.height);

  return (
    <SizeStyle>
      <div>
        <GlobalStyle />
        <H2>Width:</H2>
        <InputRange
          maxValue={320}
          minValue={0}
          value={width}
          onChange={value => setWidth(value)}
          formatLabel={value => `${value}px`}
        />
        <H2>Height:</H2>
        <InputRange
          maxValue={320}
          minValue={0}
          value={height}
          onChange={value => setHeight(value)}
          formatLabel={value => `${value}px`}
        />
      </div>
      <StyleContext.Provider value={{ width, height }}>
        <Square />
      </StyleContext.Provider>
    </SizeStyle>
  );
}

const GlobalStyle = createGlobalStyle`
  .input-range {
    margin-bottom: 3rem;
  }
  .input-range__track--active,
  .input-range__slider {
    background: tomato;
  }
  .input-range__slider {
    border-color: tomato;
  }
  .input-range__label-container {
    left: 0;
  }
  .input-range__label.input-range__label--value .input-range__label-container {
    left: -50%;
  }
`;

const H2 = styled.h2`
  color: #575757;
  margin-bottom: 1.5rem;
`;

const SizeStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 340px 340px;
  }
`;