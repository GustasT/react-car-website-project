import styled from "styled-components";

export const StyledNavigation = styled.nav`
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a {
    margin: 0.5rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.25s ease-in-out;
  }

  a.active {
    font-weight: bold;
    color: #ff6433;
  }

  a:hover {
    color: #ff6433;
  }
`;
