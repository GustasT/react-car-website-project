import React from "react";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
