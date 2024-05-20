import "./DownloadAppSection.css";
import DownloadSectionCropped from "../../assets/downloadsectioncropped.png";
import Downarrow from "../../assets/downarrow.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";

import React from "react";

const DownloadAppSection = () =>
  <div className="download-section-container">
    <img className="mobile" src={DownloadSectionCropped} alt="" srcset="" />
    <img className="downarrow" src={Downarrow} alt="" srcset="" />
    <div>
      <h2 className="download-heading">
        Download the <span className="medify-text">Medify</span> App
      </h2>
      <p className="link-download-text">Get the link to download the app</p>
      <div className="input-button">
        <div className="input">
          <div className="country-code-text">+91</div>
          <input type="text" className="phone-number-input" placeholder="Enter phone number" />
        </div>
        <button className="send-sms">Send SMS</button>
      </div>

      <div className="apple-google">
        <img src={google} alt="" srcset="" />
        <img src={apple} alt="" srcset="" />
      </div>
    </div>
  </div>

export default DownloadAppSection;
