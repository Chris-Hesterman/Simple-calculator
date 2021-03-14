import React from 'react';
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      total: 0
    };
    this.getInput = this.getInput.bind(this);
  }

  getInput(e, char) {
    if (char === undefined) {
      return;
    }
    if (char === '=' && Number(this.state.string.slice(-1)[0])) {
      console.log(Number(this.state.string.slice(-1)[0]));
      if (
        this.state.string.slice(0, 1)[0] === '-' ||
        typeof +this.state.string.slice(0, 1)[0] === 'number'
      ) {
        this.setState((prevState) => {
          // eslint-disable-next-line no-eval
          const total = eval(prevState.string);
          return { string: `${total}` };
        });
      }
    } else if (char === 'CLEAR') {
      this.setState({ string: '' });
    } else {
      if (char !== '=') {
        this.setState((prevState) => {
          return { string: prevState.string.concat(char) };
        });
      }
    }
  }
  render() {
    return (
      <CalcStyled>
        <StyledH1>Simple Calculator</StyledH1>
        <Display
          title="display"
          readout={this.state.string || this.state.total}
        />
        <KeypadStyled title="keypad">
          <Nums getInput={this.getInput} />
          <Operators getInput={this.getInput} />
        </KeypadStyled>
      </CalcStyled>
    );
  }
}

export default App;
