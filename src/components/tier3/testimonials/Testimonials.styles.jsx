import { styled } from "styled-components";

export const TestimonialsContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 3rem;

  background-color: ${(props) =>
    props.theme.name === "Light" ? "#F2F2F2" : "black"};

  h3 {
    font-size: 36px;
    padding-bottom: 4rem;
    text-align: center;
  }
  .testimonials-carousel {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
  }

  .carousel-indicator {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  .indicator {
    width: 25px;
    height: 3px;
    background-color: gray;
    margin: 0 4px;
  }
`;
