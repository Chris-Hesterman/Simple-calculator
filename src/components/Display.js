import React from 'react';
import styled from 'styled-components';

const DisplayStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 22rem;
  border: 1px solid black;
  text-transform: uppercase;
  background: black;
  color: red;
  margin-bottom: 25px;
`;

const Display = (props) => {
  return (
    <DisplayStyled>
      <p>{props.readout}</p>
    </DisplayStyled>
  );
};

export default Display;
