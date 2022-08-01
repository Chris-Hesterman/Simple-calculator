import React from 'react';
import { createList } from '../../utils';
import { ButtonStyled, OperatorsStyled, LiStyled } from './OperatorsStyles';

const Operators = (props) => {
  let ops = ['*', '/', '+', '-', '√', '='];

  const handleClick = (e) => {
    props.getInput(e, e.target.textContent);
  };

  const operations = createList(ops, 'operator', ButtonStyled, LiStyled);

  return (
    <OperatorsStyled title="operatorKeys" onClick={handleClick}>
      {operations}
    </OperatorsStyled>
  );
};

export default Operators;
