import React from "react";
import "./Header.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="icon" src={logo}/>
        <span>Shopping Bazzar</span>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
