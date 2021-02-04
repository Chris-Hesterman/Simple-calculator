import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './components/Display.js';
import Nums from './components/Nums.js';
import Operators from './components/Operators.js';

const CalcStyled = styled.div`
  background: tan;
  width: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 30px 50px 30px;
  box-shadow: 7px 7px 5px darkgrey;
`;

const StyledH1 = styled.h1`
  color: red;
  text-shadow: 1px 1px 1px black, 0 1px 1px black, 1px 0 1px black,
    -1px 0 1px black, -1px -1px 1px black, 0 -1px 1px black;
`;
const KeypadStyled = styled.div`
  display: flex;
  width: 22.25rem;
  justify-content: space-between;
`;
const App = (props) => {
  const [string, setString] = useState('');
  const [total, setTotal] = useState(0);

  const getInput = (e, char) => {
    console.log(e);
    if (char === undefined) {
      return;
    }
    if (char === '=' && Number(string.slice(-1)[0])) {
      console.log(Number(string.slice(-1)[0]));
      if (
        string.slice(0, 1)[0] === '-' ||
        typeof +string.slice(0, 1)[0] === 'number'
      ) {
        setString((string) => {
          // eslint-disable-next-line no-eval
          const total = eval(string);
          return `${total}`;
        });
      }
    } else if (char === 'CLEAR') {
      setString('');
    } else {
      if (char !== '=') {
        setString((string) => {
          return string.concat(char);
        });
      }
    }
  };

  return (
    <CalcStyled>
      <StyledH1>Simple Calculator</StyledH1>
      <Display readout={string || total} />
      <KeypadStyled focus>
        <Nums getInput={getInput} />
        <Operators getInput={getInput} />
      </KeypadStyled>
    </CalcStyled>
  );
};

export default App;
