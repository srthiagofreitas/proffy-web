import React from "react";

import logoimg from "../../assets/images/logo.svg";
import landingimg from "../../assets/images/landing.svg";

import studuIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoimg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingimg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studuIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Rocho" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
// parai em 01:30:00
