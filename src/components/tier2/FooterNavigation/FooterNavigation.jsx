import React from "react";
import { Link } from "react-router-dom";
import { StyledFooterNavigation } from "./FooterNavigation.styles";

export const FooterNavigation = () => {
  return (
    <StyledFooterNavigation>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </StyledFooterNavigation>
  );
};
