import React from "react";
import { styled } from "styled-components";

const StyledTestimonial = styled.div`
  padding: 3rem;

  background-color: ${(props) =>
    props.theme.name === "Light" ? "white" : "#1c1c1c"};

  .info-container {
    display: flex;

    .profile-picture-container {
      width: 64px;
      height: 64px;
      border-radius: 50%;

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
  }

  .testimonial-text {
    padding-top: 1rem;
  }
`;

export const Testimonial = ({ profilePicture, text, name, place }) => {
  return (
    <StyledTestimonial>
      <div className="info-container">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="profile picture" />
        </div>
        <div>
          <p>{name}</p>
          <span>{place}</span>
        </div>
      </div>
      <p className="testimonial-text">{text}</p>
    </StyledTestimonial>
  );
};
