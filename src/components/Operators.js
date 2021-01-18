import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(230, 230, 255, 0.75) 30%,
    rgba(170, 170, 255, 1) 80%
  );
  padding: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: calc((0.25 * (156px)));
  margin: 2px;
  border: 1px solid #666;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  font-size: 1.5rem;
  outline: none;
  transition: all 0.025s linear;
  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
    border: 1px solid #333;
  }
  &:last-child {
    height: 96px;
  }
`;
const OperatorsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  height: 264px;
  padding-bottom: 3px;
  outline: none;
`;
function Operators(props) {
  const handleClick = (e) => {
    props.getInput(e.target.id);
  };
  let ops = ['*', '/', '+', '-', '='];
  ops = ops.map((operator) => {
    return (
      <ButtonStyled key={operator} id={operator} onClick={handleClick}>
        {operator}
      </ButtonStyled>
    );
  });

  return <OperatorsStyled>{ops}</OperatorsStyled>;
}

export default Operators;
