import React from "react";
import Resume from "../../utils/resume.json";
import "./style.css";

export const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="me-img"></div>
        <h2>Hello There!</h2>
        <p>{Resume.basics.description}</p>
      </div>
    </section>
  );
};
