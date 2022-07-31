import React from 'react';
import { DisplayStyled, PStyled } from './DisplayStyles';

const Display = (props) => {
  return (
    <DisplayStyled title="display">
      <PStyled title="readout">{props.readout}</PStyled>
    </DisplayStyled>
  );
};

export default Display;
