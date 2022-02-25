import React, { useState } from "react";
import logoEdgar from "./assets/h1-logo-edgar-mayorga.png";
import "./Header.css";

const Header = () => {
  const [navStyle, setNavStyle] = useState("");
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > nav.offsetHeight + 80) {
      setNavStyle("active");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div>
      <nav className={`${"nav"} ${navStyle}`}>
        <div className="container">
          <figure className="logo">
            <a href="/">
              <img src={logoEdgar} alt="edgar mayorga logo" />
            </a>
          </figure>
          <ul>
            <li>
              <a href="/#perfil">Perfil</a>
              <a href="/#votar" id="redText">
                ¿Cómo Votar?
              </a>
              <a href="/#propuestas">Propuestas</a>
              <a href="/#consulta">Consulta de Votación</a>
              <a href="/#social">Redes Sociales</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
