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
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 30px 50px 30px;
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

  getInput(char) {
    if (char === undefined) {
      return;
    }
    if (char === '=') {
      this.setState((prevState) => {
        // eslint-disable-next-line no-eval
        const total = eval(prevState.string);
        return { string: total };
      });
    } else if (char === 'CLEAR') {
      this.setState({ string: '' });
    } else {
      this.setState((prevState) => {
        return { string: prevState.string.concat(char) };
      });
    }
  }
  render() {
    return (
      <CalcStyled>
        <h1>Calculator</h1>
        <Display readout={this.state.string || this.state.total} />
        <KeypadStyled>
          <Nums getInput={this.getInput} />
          <Operators getInput={this.getInput} />
        </KeypadStyled>
      </CalcStyled>
    );
  }
}

export default App;
