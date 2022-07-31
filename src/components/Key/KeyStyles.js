import styled from 'styled-components';

export const KeyStyled = styled.button`
  display: flex;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.756) 30%,
    rgba(187, 187, 187, 1) 80%
  );
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 2px;
  outline: none;
  box-shadow: 1px 1px 2px black;
  font-size: 1.5rem;
  transition: all 0.025s linear;
  &.CLEAR {
    font-size: 1rem;
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
    border: 1px solid #333;
  }
`;
