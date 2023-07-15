import React from "react";
import { styled } from "styled-components";
import { Container } from "../../tier1/Container/Container";
import { Cube } from "../../tier1/cube/Cube";
import diagnosticsIconSvg from "../../../assets/icons/diagnostics-icon.svg";
import engineIconSvg from "../../../assets/icons/engine-icon.svg";
import wheelIconSvg from "../../../assets/icons/wheel-icon.svg";
import oilIconSvg from "../../../assets/icons/oil-icon.svg";
import bodyIconSvg from "../../../assets/icons/body-icon.svg";
import batteriesIconSvg from "../../../assets/icons/batteries-icon.svg";
import insuranceIconSvg from "../../../assets/icons/insurance-icon.svg";
import serviceIconSvg from "../../../assets/icons/service-icon.svg";

const OfferComponentContainer = styled.div`
  background-color: ${(props) =>
    props.theme.name === "Light" ? "#F2F2F2" : "black"};
  padding-top: 5rem;
  padding-bottom: 5rem;
  h3 {
    font-size: 36px;
    padding-bottom: 4rem;
    text-align: center;
  }

  p {
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const OfferContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Offer = () => {
  return (
    <OfferComponentContainer>
      <Container>
        <p>What we Offer</p>
        <h3>We offer full service auto repair & maintenance</h3>
        <OfferContainer>
          <Cube icon={diagnosticsIconSvg} text={"Diagnostics"} />
          <Cube icon={engineIconSvg} text={"Engine Repair"} />
          <Cube icon={wheelIconSvg} text={"Wheel Repair"} />
          <Cube icon={oilIconSvg} text={"Oil Filter"} />
          <Cube icon={bodyIconSvg} text={"Body Work"} />
          <Cube icon={batteriesIconSvg} text={"Batteries"} />
          <Cube icon={insuranceIconSvg} text={"Insurance Claim"} />
          <Cube icon={serviceIconSvg} text={"Custom Service"} />
        </OfferContainer>
      </Container>
    </OfferComponentContainer>
  );
};
