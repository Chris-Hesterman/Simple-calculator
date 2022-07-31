import React from 'react';
import { ButtonStyled, OperatorsStyled, LiStyled } from './OperatorsStyles';

const Operators = (props) => {
  let ops = ['*', '/', '+', '-', '√', '='];

  const handleClick = (e) => {
    props.getInput(e, e.target.id);
  };

  ops = ops.map((operator) => {
    return (
      <LiStyled key={operator}>
        <ButtonStyled id={operator}>{operator}</ButtonStyled>
      </LiStyled>
    );
  });

  return (
    <OperatorsStyled title="operatorKeys" onClick={handleClick}>
      {ops}
    </OperatorsStyled>
  );
};

export default Operators;
