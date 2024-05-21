import React from 'react';
import './MedicalSpecialist.css';

import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ahemad from '../../assets/ahmad.png';
import ankur from '../../assets/ankur.png';
import heena from '../../assets/heena.png';
import rajdeep from '../../assets/rajdeep.png';
import sudhir from '../../assets/sudheer.png';

const doctors = [
  { img: ahemad, name: 'Dr. Ahemad Khan', specialty: 'Neurologist' },
  { img: ankur, name: 'Dr. Ankur Sharma', specialty: 'Medicine' },
  { img: heena, name: 'Dr. Heena Sachdeva', specialty: 'Orthopedics' },
  { img: rajdeep, name: 'Dr. Rajdeep Sardesai', specialty: 'Cardiologist' },
  { img: sudhir, name: 'Dr. Sudhir Chaudhary', specialty: 'ENT Specialist' },
  { img: ahemad, name: 'Dr. Ahemad Khan', specialty: 'Neurologist' },
  { img: ankur, name: 'Dr. Ankur Sharma', specialty: 'Medicine' },
];




const MedicalSpecialist = () => {
  const renderDoctorSlide = (key, { img, name, specialty }) => (
    <SwiperSlide key={key} className='swiper-slide'>
      <div className="doctor-profile-details-container">
        <div className="doctor-profile-image">
          <img srcSet="" className="doctor-image" src={img} alt={name} />
        </div>
        <div className="doctor-info">
          <h1>{name}</h1>
          <p>{specialty}</p>
        </div>
      </div>
    </SwiperSlide>
  );

  return <div className="medical-specialist-container">
    <h1>Our Medical Specialist</h1>
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={5}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {doctors.map((doctor, index) => (
        renderDoctorSlide(index, doctor)
      ))}
    </Swiper>
  </div>

}

export default MedicalSpecialist;
