import "./FamilySection.css";
import MedifyOverviewImage from "../../assets/MedifyOverview.png";

import React from "react";

const FamilySection = () =>
  <div className="family-section-container">
    <div className="family-section-content">
      <h3 className="caring-health-heading">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h3>
      <h1 className="our-families-heading">Our Families</h1>
      <p className="our-families-info">
        We will work with you to develop individualised care plans, including
        management of chronic diseases. If we cannot assist, we can provide
        referrals or advice about the type of practitioner you require. We
        treat all enquiries sensitively and in the strictest confidence.
      </p>
    </div>
    <img srcSet="" src={MedifyOverviewImage} alt="medify-overview" className="our-family-section-image" />
  </div>

export default FamilySection;
