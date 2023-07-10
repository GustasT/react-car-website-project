import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import "./translations/translations.jsx";
// import i18next from "i18next";
import { GlobalStyle } from "./global-styles/GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
// import { StyledButton } from "./components/tier1/Button/Button.styles.jsx";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { DarkTheme, LightTheme } from "./global-styles/Themes.jsx";
// import { Container } from "./components/tier1/Container/Container.jsx";
import { Navbar } from "./layouts/Navbar/Navbar.jsx";
import { FooterBottom } from "./layouts/Footer/FooterBottom.jsx";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const App = () => {
  // const { t } = useTranslation();

  // const saveAndSetLanguage = (language) => {
  //   localStorage.setItem("language", language);
  //   i18next.changeLanguage(language);
  // };

  const [theme, setTheme] = useState("LightTheme");

  function toggleTheme() {
    theme === "LightTheme" ? setTheme("DarkTheme") : setTheme("LightTheme");
  }

  return (
    <ThemeProvider theme={theme === "LightTheme" ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <StyledApp>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        <FooterBottom />
        <button onClick={toggleTheme}>ChangeTheme</button>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
