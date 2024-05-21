import React from "react";
import "./FindDoctor.css";

import searchWhiteIcon from "../../assets/SearchwhiteIcon.png";
import verifiedtick from "../../assets/verifiedtick.png";
import oralhealth from "../../assets/oralhealth.png";
import HospitalDetails from "../HospitalDetails/HospitalDetails"
import FaqSection from "../FaqSection/FaqSection";
import Dropdown from "../Dropdown/Dropdown"

const FindDoctor = ({
  medicalCenters,
  selectedState,
  setSelectedState,
  states,
  cities,
  selectedCity,
  setSelectedCity,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
}) => {



  const renderMedicalCenters = () =>
    medicalCenters.map((center, index) => (
      <div key={index}>
        <HospitalDetails
          key={index}
          availableSlots={availableSlots}
          setAvailableSlots={setAvailableSlots}
          appointments={appointments}
          addAppointment={addAppointment}
          center={center}
        />
      </div>
    ));

  const renderStateSelect = () => (
    <Dropdown
      options={states}
      selectedValue={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
      placeholder="State"
    />
  );

  const renderCitySelect = () => (
    <Dropdown
      options={states}
      selectedValue={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
      placeholder="City"
    />
  );

  const renderSearchButton = () => (
    <button className="search-btn">
      <img src={searchWhiteIcon} alt="Search Icon" />
      Search
    </button>
  );

  const renderMedicalCenterInfo = () => (
    <div className="medical-center-info-container">
      <h1 className="medical-info-heading">
        {medicalCenters.length} medical centers available in {selectedState}
      </h1>
      <h6 className="verified-tick-heading">
        <img src={verifiedtick} alt="Verified Tick" />
        Book appointments with minimum wait-time & verified doctor details
      </h6>
    </div>
  );

  const renderMedicalCentersSection = () => (
    <div className="medical-centers-container">
      <div>
        {renderMedicalCenterInfo()}
        {medicalCenters.length ? (
          renderMedicalCenters()
        ) : (
          <div class="loader"></div>
        )}
      </div>
      <img src={oralhealth} alt="Oral Health" className="oral-health-image" />
    </div>
  );

  return (
    <>
      <div className="background-blue-container"></div>

      <div className="search-actions-container">
        {renderStateSelect()}
        {renderCitySelect()}
        {renderSearchButton()}
      </div>

      {selectedState ? (
        renderMedicalCentersSection()
      ) : (
        <h1 className="no-view">No Hospitals, Select state and city</h1>
      )}
      <FaqSection />
    </>
  );
};

export default FindDoctor;
