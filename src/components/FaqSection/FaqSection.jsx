import React from "react";
import "./FaqSection.css";
import plus from "../../assets/plus.png";
import likes from "../../assets/likes.png";
import love from "../../assets/love.png";

const questions = [
  "Why choose our medical for your family?",
  "Why we are different from others?",
  "Trusted & experience senior care & love",
  "How to get appointment for emergency cases?",
];

const FaqSection = () =>
  <div className="FaqSection">
    <div className="faq-title">Get Your Answer</div>
    <div className="faq-description">Frequently Asked Questions</div>
    <div className="left-section-images-container">
      <div className="left-image-container">
        <img className="likes" src={likes} alt="Likes" />
        <img className="love" src={love} alt="Love" />
      </div>

      <div className="questions-container">
        {questions.map((question, index) => (
          <div key={index} className="each-question-container">
            <p className="question">{question}</p>
            <img src={plus} alt="Plus icon" />
          </div>
        ))}
      </div>
    </div>
  </div>

export default FaqSection;
