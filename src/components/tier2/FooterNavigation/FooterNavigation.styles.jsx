import styled from "styled-components";

export const StyledFooterNavigation = styled.ul`
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
  }

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
