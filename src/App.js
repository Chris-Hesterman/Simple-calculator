import Display from './components/Display/Display';
import Nums from './components/Nums/Nums';
import Operators from './components/Operators/Operators';
import { CalcStyled, StyledH1, KeypadStyled } from './AppStyles';
import { useGetInput } from './utils.js';

const App = () => {
  const [string, getInput] = useGetInput();

  return (
    <CalcStyled title="calculatorApp">
      <StyledH1>Simple Calculator</StyledH1>
      <Display title="readout" readout={string === '' ? '0' : string} />
      <KeypadStyled focus title="keypad">
        <Nums getInput={getInput} />
        <Operators getInput={getInput} />
      </KeypadStyled>
    </CalcStyled>
  );
};

export default App;
