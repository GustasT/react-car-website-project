import React from "react";
import { Container } from "../components/tier1/Container/Container";
import { CTA } from "../components/tier3/CTA/CTA";
import { Experience } from "../components/tier2/experience/Experience";
import { FAQAccordion } from "../components/tier3/faq/FAQ";

const Home = () => {
  return (
    <>
      <Container>
        <div>Home</div>
      </Container>
      <CTA />
      <Experience />
      <FAQAccordion />
    </>
  );
};

export default Home;
