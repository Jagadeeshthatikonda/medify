import React from "react";
import "./MedifyBodyContentWrapper.css";
import Hero from "../../assets/Hero.png";
import ThirtyOff from "../../assets/ThirtyOff.png";
import HundredOff from "../../assets/HundredOff.png";
import SearchWhiteIcon from "../../assets/SearchwhiteIcon.png";
import DoctorLogo from "../../assets/DoctorLogo.png";
import Ambulance from "../../assets/Ambulance.png";
import Capsule from "../../assets/Capsule.png";
import Hospital from "../../assets/Hospital.png";
import Drugstore from "../../assets/Drugstore.png";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Specialisation from "../Specialisation/Specialisation"
import MedicalSpecialist from "../MedicalSpecialist/MedicalSpecialist"
import PatientCaringSection from "../PatientCaringSection/PatientCaringSection"
import BlogAndNews from "../../components/BlogAndNews/BlogAndNews"
import FamilySection from "../../components/FamilySection/FamilySection"
import FaqSection from "../../components/FaqSection/FaqSection";
import Dropdown from "../../components/Dropdown/Dropdown"


const Category = ({ src, alt, label }) => (
  <div>
    <img src={src} alt={alt} />
    <h6>{label}</h6>
  </div>
);

const MedifyBodyContentWrapper = ({
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  states,
  cities,
}) => {
  const navigate = useNavigate();
  console.log(states, cities)

  const renderCategory = () => <div className="category">
    <Category src={DoctorLogo} alt="Doctor" label="Doctors" />
    <Category src={Drugstore} alt="Drugstore" label="Labs" />
    <Category src={Hospital} alt="Hospital" label="Hospitals" />
    <Category src={Capsule} alt="Capsule" label="Medical store" />
    <Category src={Ambulance} alt="Ambulance" label="Ambulance" />
  </div>

  const renderSearchDetails = () => (
    <div className="search-hospital-details">
      <div className="form">
        <Dropdown
          options={states}
          selectedValue={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          placeholder="State"
        />
        <Dropdown
          options={cities}
          selectedValue={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          placeholder="City"
        />
        <button
          className="search-btn"
          onClick={() => {
            navigate("/findDoctor");
          }}
        >
          <img src={SearchWhiteIcon} alt="" />
          Search
        </button>
      </div>
      <h5>You may be looking for</h5>
      {renderCategory()}
    </div>
  );

  const renderHeroSection = () => (
    <div className="hero-section-container">
      <div className="hero-section-info">
        <h3 className="hero-section-title">
          Skip the travel! Find Online <span className="medical-text">Medical</span>
          <span className="centers-text">Centers</span>
        </h3>
        <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <button
          onClick={() => {
            navigate("/findDoctor");
          }}
          className="find-center-btn"
        >
          Find Centers
        </button>
      </div>
      <img src={Hero} alt="Hero" />
    </div>
  );

  const renderOffers = (slidesPerView, styleWidth) => (
    <div className={`offer-img`}>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        style={{ width: styleWidth }}
      >
        {[HundredOff, ThirtyOff, HundredOff, ThirtyOff, HundredOff].map((src, idx) => (
          <SwiperSlide key={idx}>
            <img className="offer" src={src} alt="Offer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="medify-body-container">
      {renderHeroSection()}
      {renderSearchDetails()}
      {renderOffers(3, 1250)}
      <Specialisation />
      <MedicalSpecialist />
      <PatientCaringSection />
      <BlogAndNews />
      <FamilySection />
      <FaqSection />

    </div>
  );
};

export default MedifyBodyContentWrapper;
