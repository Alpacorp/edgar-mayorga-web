import React from "react";
import logoEdgar from "./assets/h1-logo-edgar-mayorga.png";
import "./Header.css";

const Header = () => {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > nav.offsetHeight + 8) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <figure className="logo">
            <a href="/">
              <img src={logoEdgar} alt="edgar mayorga logo" />
            </a>
          </figure>
          <ul>
            <li>
              <a href="/#perfil" id="blueText">
                Perfil
              </a>
              <a href="/#comovotar" id="redText">
                ¿Cómo Votar?
              </a>
              <a href="#propuestas" id="blueText">
                Propuestas
              </a>
              <a href="#consulta" id="blueText">
                Consulta de Votación
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
