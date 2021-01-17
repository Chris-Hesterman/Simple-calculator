import React from 'react';
import styled from 'styled-components';
import Key from './Key.js';

const KeypadStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15.75rem;
`;

const ListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

function Nums(props) {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id !== 'ulist') {
      console.log('clicked', e.target.className[e.target.className.length - 1]);
    }
  };
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
  nums = nums.map((num) => {
    return (
      <li key={num}>
        <Key num={num} />
      </li>
    );
  });
  return (
    <KeypadStyled>
      <ListStyled onClick={handleClick} id="ulist">
        {nums}
      </ListStyled>
    </KeypadStyled>
  );
}

export default Nums;
