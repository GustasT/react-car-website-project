import React from "react";
import { Button } from "../../tier1/Button/Button";
import bmwPicture from "../../../assets/pictures/bmw-picture.jpeg";
import enginePicture from "../../../assets/pictures/old-engine-picture.jpeg";
import { StyledCTA } from "./CTA.styles";

export const CTA = () => {
  return (
    <StyledCTA>
      <div className="cta-left">
        <img src={bmwPicture} alt="." />
      </div>
      <div className="cta-right">
        <img src={enginePicture} alt="." />
      </div>
      <div className="cta-middle">
        <h3>Get in touch with us for your service related query</h3>
        <Button>Contact us</Button>
      </div>
    </StyledCTA>
  );
};
