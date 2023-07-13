import React, { useState } from "react";
import styled from "styled-components";
import { Container, StyledContainer } from "../../tier1/Container/Container";

const StyledStyledContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 36px;
    padding-bottom: 4rem;
  }
`;

const AccordionContainer = styled.div`
  padding: 5rem 1rem;
  background-color: ${(props) =>
    props.theme.name === "Light" ? "#e2e6e9" : "black"};
`;

const FAQItem = styled.div`
  background-color: ${(props) =>
    props.theme.name === "Light" ? "#F2F2F2" : "#1c1c1c"};
  padding: 2rem;
  width: 700px;
  margin-top: 0.5rem;
`;

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
`;

const Answer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  font-size: 14px;
  opacity: 60%;
`;

export const FAQAccordion = () => {
  const data = [
    {
      question: "How long should a car repair take?",
      answer:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      question: "How do I schedule my car's appointment ?",
      answer: "You can schedule your appointment online or simply call us.",
    },
    {
      question: "What are the repair services provided?",
      answer: "Fixing one thing and breaking the other",
    },
    {
      question: "How do I find auto body shops near me?",
      answer:
        "Use our integrated shop searcher or simply search us on google maps",
    },
    {
      question: "Genuine spare parts during car repair?",
      answer: "Yes all our parts are legit.",
    },
    // Add more FAQ objects here
  ];

  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <AccordionContainer>
      <StyledStyledContainer>
        <h3>Frequently Asked Questions</h3>
        {data.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleAccordion(index)}>
              {faq.question}
            </Question>
            <Answer isOpen={activeIndices.includes(index)}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </StyledStyledContainer>
    </AccordionContainer>
  );
};
