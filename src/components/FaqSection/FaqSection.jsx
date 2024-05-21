import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import "./FaqSection.css";
import Plus from "../../assets/plus.png"
import likes from "../../assets/likes.png";
import love from "../../assets/love.png";

const questions = [
  {
    header: "Why choose our medical for your family?",
    content: `Our medical services are tailored to meet the unique needs of your family, providing top-notch care and support.`,
  },
  {
    header: "Why we are different from others?",
    content: `We stand out due to our experienced staff, compassionate care, and state-of-the-art facilities.`,
  },
  {
    header: "Trusted & experience senior care & love",
    content: `We offer senior care services that are built on trust, experience, and love, ensuring the best for your loved ones.`,
  },
  {
    header: "How to get appointment for emergency cases?",
    content: `In case of an emergency, you can quickly book an appointment through our hotline or online booking system.`,
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const renderAccordions = () => {
    return questions.map((item, index) => (
      <Accordion
        key={index}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        className="accordionContainer"
      >
        <AccordionSummary
          expandIcon={
            expanded === `panel${index}` ? (
              <RemoveCircleOutlinedIcon sx={{ color: "var(--color-primary)" }} />
            ) : (
              <img srcSet="" src={Plus} alt="Plus icon" />
            )
          }
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
          className="accordionSummary"
        >
          {item.header}
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
          {item.content}
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <div className="FaqSection">
      <div className="faq-title">Get Your Answer</div>
      <div className="faq-description">Frequently Asked Questions</div>
      <div className="left-section-images-container">
        <div className="left-image-container">
          <img className="likes" src={likes} alt="Likes" />
          <img className="love" src={love} alt="Love" />
        </div>
        <div className="questions-container">{renderAccordions()}</div>
      </div>
    </div>
  );
};

export default FaqSection;
