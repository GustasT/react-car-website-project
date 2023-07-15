import React from "react";
import { styled } from "styled-components";
import brand1Svg from "../../../assets/brands/brand1.svg";
import brand2Svg from "../../../assets/brands/brand2.svg";
import brand3Svg from "../../../assets/brands/brand3.svg";
import brand4Svg from "../../../assets/brands/brand4.svg";
import brand5Svg from "../../../assets/brands/brand5.svg";
import { Container } from "../../tier1/Container/Container";

const BrandsComponentContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  background-color: ${(props) =>
    props.theme.name === "Light" ? props.theme.body : "black"};
  h3 {
    font-size: 36px;
    text-align: center;
    padding-bottom: 4rem;
  }
`;

const BrandsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  justify-content: center;

  img {
    opacity: 80%;
  }
`;

export const Brands = () => {
  return (
    <BrandsComponentContainer>
      <Container>
        <h3>Brands we serve</h3>
        <BrandsContainer>
          <div>
            <img src={brand1Svg} alt="" />
          </div>
          <div>
            <img src={brand2Svg} alt="." />
          </div>
          <div>
            <img src={brand3Svg} alt="." />
          </div>
          <div>
            <img src={brand4Svg} alt="." />
          </div>
          <div>
            <img src={brand5Svg} alt="." />
          </div>
          <div>
            <img src={brand1Svg} alt="" />
          </div>
          <div>
            <img src={brand2Svg} alt="." />
          </div>
          <div>
            <img src={brand3Svg} alt="." />
          </div>
          <div>
            <img src={brand4Svg} alt="." />
          </div>
          <div>
            <img src={brand5Svg} alt="." />
          </div>
        </BrandsContainer>
      </Container>
    </BrandsComponentContainer>
  );
};
