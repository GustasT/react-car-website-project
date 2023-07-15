import React from "react";
import { styled } from "styled-components";

const StyledCube = styled.div`
  background-color: ${(props) =>
    props.theme.name === "Light" ? "white" : "#1c1c1c"};
  height: 175px;
  width: 262px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #ff6433;
  }
  img {
    height: 42px;
    width: 42px;
  }
`;

export const Cube = ({ icon, text }) => {
  return (
    <StyledCube>
      <img src={icon} alt="." />
      <span>{text}</span>
    </StyledCube>
  );
};
