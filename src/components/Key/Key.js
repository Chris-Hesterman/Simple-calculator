import React from 'react';
import { KeyStyled } from './KeyStyles';

const Key = (props) => {
  return (
    <KeyStyled
      className={`${props.num}`}
      data-testid={
        Number.isInteger(+props.num)
          ? 'number'
          : props.num === '.'
          ? 'decimal'
          : 'CLEAR'
      }
    >
      {props.num}
    </KeyStyled>
  );
};

export default Key;
