import React from "react";
import { StyledButton } from "./Button.styles";

export const Button = ({ type, variant, className, id, onClick, children }) => {
  return (
    <StyledButton
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
