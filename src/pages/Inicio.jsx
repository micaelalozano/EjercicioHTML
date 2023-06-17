import React from "react";
import Header from "../components/Header";
import video from "../assets/video.mp4";
import logo from "../assets/logo.png";
import { IoCalendarOutline } from "react-icons/io5";
//Notificacion
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Estilos
import "../estilos/inicio.css";

const Inicio = () => {
  const handleButtonClick = () => {
    toast("📆 Próximamente ...", {
      position: "top-center",
      theme: "dark",
      autoClose: 2000, // Duración de la notificación en milisegundos (opcional)
      hideProgressBar: true, // Ocultar barra de progreso (opcional)
      closeOnClick: true, // Cerrar al hacer clic (opcional)
      pauseOnHover: false, // Pausar al pasar el cursor sobre la notificación (opcional)
      draggable: true, // Permitir arrastrar la notificación (opcional)
    });
  };

  return (
    <>
      <Header />
      <div className="contenedor-general">
        <div className="contenedor-right">
          <p className="texto-uno">
            <span className="texto-uno-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem magni quo fugiat sed assumenda non est quidem ex
              voluptatum deleniti.
            </span>
            Maiores numquam, illum repudiandae cumque fuga cupiditate amet
            repellat autem.Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <p className="texto-uno">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem magni quo fugiat sed assumenda non est quidem ex
            voluptatum deleniti magni quo fugiat. Maiores numquam, illum
            repudiandae cumque fuga cupiditate amet repellat autem.
          </p>
          <p className="texto-dos">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem magni quo fugiat sed assumenda non est quidem ex
            voluptatum deleniti.
            <span className="texto-dos-color">
              Maiores numquam, illum repudiandae cumque fuga cupiditate amet
              repellat autem. Maiores numquam, illum repudiandae cumque fuga
              cupiditate amet repellat autem.
            </span>
          </p>
        </div>
        <div className="contenedor-left">
          <div className="contenedor-icon">
            <IoCalendarOutline size={60} color="indigo" />
          </div>
          <p className="date">March 3th | 12:00 PM</p>
          <p className="date-dos">TBD</p>
          <button className="ov-btn-grow-box" onClick={handleButtonClick}>Confirm attendance</button>
        </div>
      </div>
      <div className="contenedeor-video">
        <div className="contenedor-izquierda">
          <video src={video} controls className="video">
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className="contenedor-derecha">
          <p className="parrafo-uno">
            <span className="p-uno-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              facere ut est autem provident odit voluptates praesentium enim,
              quia fugit?
            </span>
            Natus placeat obcaecati inventore aliquid esse, facere possimus
            iusto quis!
          </p>
          <p className="parrafo-dos">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            incidunt mollitia laborum dolores dolorem consequatur voluptatem
            necessitatibus expedita beatae voluptatum, repellat aliquid eligendi
            amet? Veniam vitae totam necessitatibus saepe ipsam.
          </p>
        </div>
      </div>
      <div className="parrafor-speaker">
        <p className="p-speaker">
          <span className="span-speaker-og">Speaker:</span>
          <span className="span-speaker">Lorem Ipsum</span> - Dolor sit amet
        </p>
      </div>
      <div className="footer">
        <div className="try">
          <div className="primer-div">
            <p id="p-color">MORE INFORMATION</p>
            <p id="p-color">
              <span className="p-color-span">Lorem Ipsum</span> | Vice President
            </p>
            <p className="mail">consectetur@loremipsum.com</p>
          </div>
          <div className="segundo-div">
            <img src={logo} alt="Logo" className="logo-footer" />
            <p id="p-color">Generic 2020.</p>
            <p id="p-color">All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
