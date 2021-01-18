import React from 'react';
import styled from 'styled-components';

const DisplayStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 22rem;
  height: 3rem;
  border: 1px solid black;
  text-transform: uppercase;
  background: black;
  color: red;
  font-size: 1.5rem;
  margin-bottom: 25px;
  padding: 0 20px;
  overflow-x: hidden;
`;

const PStyled = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-align: middle;
`;

const Display = (props) => {
  return (
    <DisplayStyled>
      <PStyled>{props.readout}</PStyled>
    </DisplayStyled>
  );
};

export default Display;
