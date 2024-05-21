import React from "react";
import "./FooterSection.css";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import pintrest from "../../assets/pintrest.png";
import Logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";

const FooterSection = () => {
  const socialMediaImages = [
    { src: facebook, alt: "facebook" },
    { src: twitter, alt: "twitter" },
    { src: youtube, alt: "youtube" },
    { src: pintrest, alt: "pintrest" },
  ];

  const medifyInfoLinks = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology"
  ];

  return (
    <div className="footer-section-container">
      <div className="social-media-links-container">
        <div className="footer-logo-container">
          <img srcSet="" src={Logo} alt="logo" className="medify-logo" />
          <div className="social-media-links-container">
            {socialMediaImages.map(({ src, alt }) => (
              <img srcSet="" src={src} alt={alt} className="social-media-image" key={alt} />
            ))}
          </div>
        </div>

        <div className="medify-info-section">
          {medifyInfoLinks.map((linkText) => (
            <i className="info-text" key={linkText}>
              <img srcSet="" className="arrow" src={arrow} alt="arrow" />
              {linkText}
            </i>
          ))}
        </div>
      </div>
      <div className="copyright-text-container">
        <p className="copyright-text">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
