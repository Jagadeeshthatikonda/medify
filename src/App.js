import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarMedifyQuotation from "./components/NavbarMedifyQuotation/NavbarMedifyQuotation"
import Navbar from "./components/Navbar/Navbar"
import MedifyBodyContentWrapper from "./components/MedifyBodyContentWrapper/MedifyBodyContentWrapper";
import "./App.css";
import FaqSection from "./components/FaqSection/FaqSection";
import DownloadAppSection from "./components/DownloadAppSection/DownloadAppSection"
import FooterSection from "./components/FooterSection/FooterSection"

const App = () => {

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

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
      </Routes>
      <FaqSection />
      <DownloadAppSection />
      <FooterSection />
    </div>
  );
}

export default App;
