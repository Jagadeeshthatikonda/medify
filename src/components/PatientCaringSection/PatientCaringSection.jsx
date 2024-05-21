import React from "react";
import "./PatientCaringSection.css";
import bluetick from "../../assets/bluetick.png";
import caring from "../../assets/caring.png";

const FeatureItem = ({ icon, text }) => (
  <div className="feature-item">
    <img srcSet="" src={icon} alt="Blue tick" />
    <p className="feature-item-text">{text}</p>
  </div>
);

const PatientCaringSection = () => {
  return (
    <div className="patient-caring">
      <img srcSet="" src={caring} alt="Patient Caring" />
      <div className="patient-caring-info">
        <h2 className="helping-text">HELPING PATIENTS FROM AROUND THE GLOBE!!</h2>
        <h1>
          <span className="patient-text">Patient</span> <span className="caring-text">Caring</span>{" "}
        </h1>
        <p className="goal-text">
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className="caring-features">
          <FeatureItem icon={bluetick} text="Stay Updated About Your Health" />
          <FeatureItem icon={bluetick} text="Check Your Results Online" />
          <FeatureItem icon={bluetick} text="Manage Your Appointments" />
        </div>
      </div>
    </div>
  );
};

export default PatientCaringSection;
