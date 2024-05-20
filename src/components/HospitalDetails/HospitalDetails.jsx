import React, { useState } from "react";
import "./HospitalDetails.css";
import HospitalCenter from "../../assets/HospitalCenter.png";
import LikeButton from "../../assets/LikeButton.png";
import Appointments from "../Appointments/Appointments";

const HospitalDetails = ({
  center,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
  readOnly,
}) => {
  const [showLower, setShowLower] = useState(false);

  const renderHospitalInfo = () => (
    <>
      <h3 className="hospital-name">{readOnly ? center.hospital : center["Hospital Name"]}</h3>
      <h6>
        {readOnly ? center.city : center.City}, {readOnly ? center.state : center.State}
      </h6>
    </>
  );

  const renderCardRightContent = () => (
    <div className={readOnly ? "right-content-my-bookings" : "right-content"}>
      {readOnly ? (
        <>
          <div className="time">{center.time}</div>
          <div className="date">{center.date}</div>
        </>
      ) : (
        <>
          <p>Available Today</p>
          <button onClick={() => setShowLower(!showLower)}>
            Book FREE Center Visit
          </button>
        </>
      )}
    </div>
  );

  const renderCardMiddleContent = () => (
    <div className="middle-content">
      {renderHospitalInfo()}
      <p className="more-text">more</p>
      <div>
        <span className="free-span">FREE</span>
        <span className="price-span">₹500</span>
        <span className="fee-span">Consultation fee at clinic</span>
      </div>
      <div className="like-image-container">
        <img src={LikeButton} alt="Like" />
      </div>
    </div>
  );

  return (
    <div className="hospital-details-container">
      <div className="hospital-details-content">
        <img src={HospitalCenter} alt="Hospital" className="hospital-image" />
        {renderCardMiddleContent()}
        {renderCardRightContent()}
      </div>
      {showLower && (
        <div className="lower">
          <Appointments
            name={center["Hospital Name"]}
            state={center.State}
            city={center.City}
            appointments={appointments}
            addAppointment={addAppointment}
            availableSlots={availableSlots}
            setAvailableSlots={setAvailableSlots}
          />
        </div>
      )}
    </div>
  );
};

export default HospitalDetails;
