import React from "react";
import { Container } from "../components/tier1/Container/Container";
import { CTA } from "../components/tier3/CTA/CTA";
import { Experience } from "../components/tier2/experience/Experience";
import { FAQAccordion } from "../components/tier3/faq/FAQ";
import { Testimonials } from "../components/tier3/testimonials/Testimonials";
import { Brands } from "../components/tier3/brands/Brands";

const Home = () => {
  return (
    <>
      <Container>
        <div>Home</div>
      </Container>
      <CTA />
      <Experience />
      <Brands />
      <Testimonials />
      <FAQAccordion />
    </>
  );
};

export default Home;
