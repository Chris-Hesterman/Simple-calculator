import styled from 'styled-components';

export const ButtonStyled = styled.button`
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
  width: 4.5rem;
  height: 100%;
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
`;

export const OperatorsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent;
  border: none;
  height: 258px;
  margin: 0;
  padding: 0;
  outline: none;
`;

export const LiStyled = styled.li`
  list-style-type: none;
  margin: 2px 0;
  padding: 0;
  height: calc((0.25 * (156px)));
  &:last-child {
    height: 96px;
  }
`;
