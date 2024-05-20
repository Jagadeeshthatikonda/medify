import "./Appointments.css";
import React, { useState, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Appointments = ({
  name,
  state,
  city,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
}) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef(null);

  const handleDaySelect = (index) => {
    setSelectedDay(index);
    setSelectedSlot("");
    setActiveSlide(index);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    const updatedAvailableSlots = updateAvailableSlots(slot);
    setAvailableSlots(updatedAvailableSlots);
    addAppointment(name, availableSlots[selectedDay].day, slot, state, city);
  };

  const updateAvailableSlots = (slot) => {
    return availableSlots.map((day) => ({
      ...day,
      morning: day.morning.filter((item) => item !== slot),
      afternoon: day.afternoon.filter((item) => item !== slot),
      evening: day.evening.filter((item) => item !== slot),
    }));
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const renderSlot = (slot) => (
    <div
      key={slot}
      className={`slot ${selectedSlot === slot ? "selected" : ""}`}
      onClick={() => handleSlotSelect(slot)}
    >
      {slot}
    </div>
  );

  const renderSlots = (timeOfDay) => (
    <div className={`day ${timeOfDay}`}>
      <h3 className="time-of-day">{timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}</h3>
      {selectedDay >= 0 && availableSlots[selectedDay][timeOfDay].map(renderSlot)}
    </div>
  );

  return (
    <div className="appointments-container">
      <div className="appointments-content">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {availableSlots.map((slot, index) => (
            <SwiperSlide key={index} onClick={() => handleDaySelect(index)}>
              <div className={`slide ${activeSlide === index ? "active" : ""}`}>
                <h1 className="slot-day">{slot.day}</h1>
                <span className="total-slots">
                  {slot.morning.length + slot.afternoon.length + slot.evening.length} slots available
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
      <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
      <div className="slots">
        {renderSlots("morning")}
        {renderSlots("afternoon")}
        {renderSlots("evening")}
      </div>
    </div>
  );
};

export default Appointments;
