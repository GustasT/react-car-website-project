import React from "react";
import { Navigation } from "../../components/tier2/Navigation/Navigation";
import { StyledNavbar } from "./Navbar.styles";
import { WebsiteLogo } from "../../components/tier1/WebsiteLogo/WebsiteLogo";
import { Assistance } from "../../components/tier1/Assistance/Assistance";
import { Container } from "../../components/tier1/Container/Container";

export const Navbar = () => {
  return (
    <Container>
      <StyledNavbar>
        <WebsiteLogo />
        <div className="navbar-right">
          <Navigation /> <Assistance />
        </div>
      </StyledNavbar>
    </Container>
  );
};
