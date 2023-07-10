import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./Navigation.styles";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </StyledNavigation>
  );
};
