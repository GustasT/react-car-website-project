import { styled } from "styled-components";

export const StyledWebsiteLogo = styled.div`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 2rem;
`;

export const WebsiteLogo = () => {
  return <StyledWebsiteLogo>&#123;finsweet</StyledWebsiteLogo>;
};
