import React from "react";
import { Container } from "../../components/tier1/Container/Container";
import { StyledWebsiteLogo } from "../../components/tier1/WebsiteLogo/WebsiteLogo";
import { FooterNavigation } from "../../components/tier2/FooterNavigation/FooterNavigation";
import { styled } from "styled-components";

const StyledFooterBottom = styled.footer`
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;

  .copyright {
    opacity: 60%;
  }
`;

const FooterLogo = styled(StyledWebsiteLogo)`
  color: white;
`;

export const FooterBottom = () => {
  return (
    <div style={{ background: "black", color: "white" }}>
      <Container>
        <StyledFooterBottom>
          <FooterLogo>&#123;finsweet</FooterLogo>
          <FooterNavigation />
          <p className="copyright">@Copyright Finsweet 2021</p>
        </StyledFooterBottom>
      </Container>
    </div>
  );
};
