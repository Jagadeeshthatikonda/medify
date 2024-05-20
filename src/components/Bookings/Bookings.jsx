import React, { useState } from "react";
import "./Bookings.css";
import SearchIcon from "../../assets/SearchIcon.png";
import SearchWhiteIcon from "../../assets/SearchwhiteIcon.png";
import oralhealth from "../../assets/oralhealth.png";
import HospitalDetails from "../HospitalDetails/HospitalDetails";

const Bookings = ({ appointments }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const renderSearchInput = () => (
    <div className="search-input-container">
      <div className="input-container booking-input">
        <img src={SearchIcon} alt="Search" />
        <input
          type="text"
          placeholder="Search by hospital"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <button className="search-btn">
        <img src={SearchWhiteIcon} alt="Search" />
        Search
      </button>
    </div>
  );

  const renderAppointments = () => (
    <div className="medicalCenters">
      <div>
        {appointments.length ? (
          appointments.map((center, index) => (
            <HospitalDetails center={center} key={index} readOnly />
          ))
        ) : (
          <h1 className="no-bookings">No bookings yet</h1>
        )}
        {appointments.length ? (
          <img className="oralhealth" src={oralhealth} alt="Oral Health" />
        ) : null}
      </div>
    </div>
  );

  return (
    <>
      <div className="background-blue-container booking-text">
        <p>My Bookings</p>
      </div>
      {renderSearchInput()}
      {appointments ? renderAppointments() : (
        <h1 className="no-appointments">No Appointments , select city and state</h1>
      )}
    </>
  );
};

export default Bookings;
