import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarMedifyQuotation from "./components/NavbarMedifyQuotation/NavbarMedifyQuotation"
import Navbar from "./components/Navbar/Navbar"
import MedifyBodyContentWrapper from "./components/MedifyBodyContentWrapper/MedifyBodyContentWrapper";
import "./App.css";
import { listOfSlots } from "./utils"
import FaqSection from "./components/FaqSection/FaqSection";
import DownloadAppSection from "./components/DownloadAppSection/DownloadAppSection"
import FooterSection from "./components/FooterSection/FooterSection"
import { getListOfStates, getCitiesFromState, getMedicalCentersFromStateAndCity } from "./apis"
import FindDoctor from "./components/FindDoctor/FindDoctor"
import Bookings from "./components/Bookings/Bookings"

const App = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (hospital, date, time, state, city) => {
    setAppointments([...appointments, { hospital, date, time, state, city }]);
  };

  const [availableSlots, setAvailableSlots] = useState(listOfSlots);


  useEffect(() => {
    const fetchListOfStates = async () => {
      const response = await getListOfStates()
      console.log("states", response)
      setStates(response);
    };
    fetchListOfStates();
  }, []);

  useEffect(() => {
    const fetchMedicalCentersInStateAndCity = async () => {
      if (selectedState || selectedCity) {
        const response = await getMedicalCentersFromStateAndCity(selectedState, selectedCity)
        setMedicalCenters(response);
      }
    }
    fetchMedicalCentersInStateAndCity();

  }, [selectedState, selectedCity])

  useEffect(() => {
    const fetchCitiesFromState = async () => {
      if (selectedState) {
        const response = await getCitiesFromState(selectedState)
        setCities(response);
      }
    };
    fetchCitiesFromState()
  }, [selectedState])

  return (
    <div className=".App">
      <NavbarMedifyQuotation />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <MedifyBodyContentWrapper
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              states={states}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              cities={cities}
            />
          }
        />
        <Route
          path="/findDoctor"
          element={
            <FindDoctor
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              states={states}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              cities={cities}
              medicalCenters={medicalCenters}
              appointments={appointments}
              addAppointment={addAppointment}
              availableSlots={availableSlots}
              setAvailableSlots={setAvailableSlots}

            />
          }
        />
        <Route
          path="/myBookings"
          element={
            <Bookings
              appointments={appointments}

            />
          }
        />
      </Routes>
      <DownloadAppSection />
      <FooterSection />
    </div>
  );
}

export default App;
