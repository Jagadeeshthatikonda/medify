
import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Logo.png";

import "./styles.css";

const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div className="header-container">
      <img
        src={logo}
        onClick={() => navigate("/")}
        height={27}
        width={92}
        alt="medify logo"
      />

      <NavigationLinks navigate={navigate} />

    </div>
  );
};

const NavigationLinks = ({ navigate }) => (
  <nav className="nav-items-container">
    <NavItem navigate={() => navigate("/findDoctor")}>Find Doctors</NavItem>
    <NavItem>Hospitals</NavItem>
    <NavItem>Medicines</NavItem>
    <NavItem>Surgeries</NavItem>
    <NavItem>Software for Provider</NavItem>
    <NavItem>Facilities</NavItem>
    <NavItemButton navigate={() => navigate("/myBookings")}>
      My Bookings
    </NavItemButton>
  </nav>
);

const NavItem = ({ navigate, children }) => (
  <span onClick={navigate}>{children}</span>
);

const NavItemButton = ({ navigate, children }) => (
  <button onClick={navigate}>{children}</button>
);

export default Navbar;
