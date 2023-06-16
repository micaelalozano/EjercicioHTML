import React from "react";
import imagen from "../assets/header1.jpg";
import logo from "../assets/logo.png";
//Estilos
import "../estilos/header.css";

const Header = () => {
  return (
    <>
      <div className="header-div">
          <img className="logo" src={logo} alt="Logo" />
        <img className="img-header" src={imagen} alt="Header" />
      </div>
    </>
  );
};

export default Header;
