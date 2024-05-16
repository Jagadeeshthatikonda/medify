import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarMedifyQuotation from "./components/NavbarMedifyQuotation/NavbarMedifyQuotation"
import Navbar from "./components/Navbar/Navbar"
import "./App.css";


const App = () => {

  return (
    <div className=".App">
      <NavbarMedifyQuotation />
      <Navbar />
      <Routes>
        <Route
          path="/"
          component={
            <p>Sample component</p>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
