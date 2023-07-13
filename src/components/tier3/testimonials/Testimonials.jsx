import React from "react";

import { Container } from "../../tier1/Container/Container";
import { Testimonial } from "../../tier1/testimonial/Testimonial";

import { TestimonialsContainer } from "./Testimonials.styles";

export const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Container>
        <h3>Our customers say the nicest things about our service</h3>
        <div className="testimonials-carousel">
          <Testimonial
            text="I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working"
            name="Jonathan Vallem"
            place="New York"
            profilePicture="https://avatarfiles.alphacoders.com/693/69306.jpg"
          />
          <Testimonial
            text="I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working"
            name="Smith Johnson"
            place="New York"
            profilePicture="https://avatarfiles.alphacoders.com/693/69306.jpg"
          />
        </div>
        <div class="carousel-indicator">
          <span class="indicator"></span>
          <span class="indicator"></span>
          <span class="indicator"></span>
          <span class="indicator"></span>
        </div>
      </Container>
    </TestimonialsContainer>
  );
};
