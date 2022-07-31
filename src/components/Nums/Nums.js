import React from 'react';
import Key from '../Key/Key';
import { KeypadStyled, ListStyled } from './NumsStyles';
import { createList } from '../../utils';

const Nums = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.which && !isNaN(Number(String.fromCharCode(e.which)))) {
      // console.log(String.fromCharCode(e.which));
      props.getInput(e, String.fromCharCode(e.which));
    } else if (e.target.id !== 'ulist') {
      props.getInput(e, e.target.classList[e.target.classList.length - 1]);
    }
  };
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', 'CLEAR'];

  const numKeys = createList(nums, 'num', Key);

  return (
    <KeypadStyled title="numberKeys">
      <ListStyled onClick={handleClick} onKeyDown={handleClick} id="ulist">
        {numKeys}
      </ListStyled>
    </KeypadStyled>
  );
};

export default Nums;
