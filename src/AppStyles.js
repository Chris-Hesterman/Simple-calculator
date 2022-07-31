import styled from 'styled-components';

export const CalcStyled = styled.div`
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

export const StyledH1 = styled.h1`
  color: red;
  text-shadow: 1px 1px 1px black, 0 1px 1px black, 1px 0 1px black,
    -1px 0 1px black, -1px -1px 1px black, 0 -1px 1px black;
`;
export const KeypadStyled = styled.div`
  display: flex;
  width: 22.25rem;
  justify-content: space-between;
`;
