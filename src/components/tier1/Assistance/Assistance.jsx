import React from "react";
import assistanceSvg from "../../../assets/icons/assistance-icon.svg";
import { styled } from "styled-components";

const StyledAssistance = styled.div`
  display: flex;
  padding-left: 2rem;
  border-left: 1px solid lightgray;
  align-items: center;
  height: 40px;

  .assistance-info {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  p {
    white-space: nowrap;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Assistance = () => {
  return (
    <StyledAssistance>
      <img src={assistanceSvg} alt="assistance" />
      <div className="assistance-info">
        <p>Road assistance</p>
        <p>1800 265 24 52</p>
      </div>
    </StyledAssistance>
  );
};
