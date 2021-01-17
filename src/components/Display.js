import React, { Component } from 'react';
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

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }
  render() {
    return (
      <DisplayStyled>
        <p>Display</p>
      </DisplayStyled>
    );
  }
}
