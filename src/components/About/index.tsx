import React from "react";
import Resume from "../../utils/resume.json";
import Me from "../../assets/DavidGomez.png";
import "./style.css";

export const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="me-img">
          <img src={Me} alt="David Gomez" className="me" />
        </div>
        <div className="container-text-about">
          <h2>Hello There!</h2>
          <p>{Resume.basics.description}</p>
        </div>
      </div>
    </section>
  );
};
