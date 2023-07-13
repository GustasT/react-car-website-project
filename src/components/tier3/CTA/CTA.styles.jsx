import { styled } from "styled-components";

export const StyledCTA = styled.div`
  display: flex;
  position: relative;

  .cta-left,
  .cta-right {
    height: 300px;
    width: 50%;
    object-fit: cover;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cta-left,
  .cta-right {
    img {
      transform: scale(0.75);
    }
  }

  .cta-middle {
    background-color: #ff6433;
    height: 300px;
    position: absolute;
    width: 30%;
    left: 27%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;

    h3 {
      color: white;
    }
  }
`;
