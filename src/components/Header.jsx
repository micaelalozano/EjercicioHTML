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
        <div className="contenedor-titulo">
          <p className="lunch">LUNCH</p>
          <h1 className="h1">Lorem ipsum</h1>
          <h1 className="h1">dolor sit amet</h1>
        </div>
        <img className="img-header" src={imagen} alt="Header" />
      </div>
    </>
  );
};

export default Header;
