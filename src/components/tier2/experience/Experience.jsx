import React from "react";
import { styled } from "styled-components";
import { Container } from "../../tier1/Container/Container";

const StyledExperience = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  background-color: ${(props) =>
    props.theme.name === "Light" ? "#F2F2F2" : "#1c1c1c"};

  .ticker {
    display: flex;
    flex-direction: column;

    span {
      font-size: 36px;
      font-weight: 800;
      color: #661ce7;
    }

    p {
      opacity: 60%;
    }
  }
`;

export const Experience = () => {
  return (
    <StyledExperience>
      <Container>
        <div className="ticker">
          <span>20+</span>
          <p>Professional</p>
        </div>
        <div className="ticker">
          <span>10+</span>
          <p>Years Experience</p>
        </div>
        <div className="ticker">
          <span>12K+</span>
          <p>Services Closed</p>
        </div>
        <div className="ticker">
          <span>100%</span>
          <p>Customer Satisfaction</p>
        </div>
      </Container>
    </StyledExperience>
  );
};
