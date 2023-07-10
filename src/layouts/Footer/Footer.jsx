import React from "react";
import { FooterBottom } from "./FooterBottom";
import { Container } from "../../components/tier1/Container/Container";
import { StyledFooter } from "./Footer.styles";
import facebookSvg from "../..//assets/social-icons/Facebook.svg";
import instagramSvg from "../..//assets/social-icons/Instagram.svg";
import linkedInSvg from "../..//assets/social-icons/LinkedIn.svg";
import twitterSvg from "../..//assets/social-icons/Twitter.svg";

export const Footer = () => {
  return (
    <StyledFooter style={{ background: "#1c1c1c", color: "white" }}>
      <Container>
        <div className="footer-top">
          <div className="footer-left">
            <h3>Get in touch with us for your service</h3>
            <div>
              <img src={facebookSvg} alt="facebook logo" />
              <img src={twitterSvg} alt="twitter logo" />
              <img src={instagramSvg} alt="instagram logo" />
              <img src={linkedInSvg} alt="linkedin logo" />
            </div>
          </div>
          <div className="footer-right">
            <p className="info-label">Help line Number</p>
            <p>1800 265 24 52</p>
            <p className="info-label">Adress</p>
            <p>NH 234 Public Square San Francisco 65368</p>
            <p className="info-label">We are open</p>
            <p>Monday to Friday 9:00 AM to 10:00 AM</p>
          </div>
        </div>
      </Container>
      <FooterBottom />
    </StyledFooter>
  );
};
