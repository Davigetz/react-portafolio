import React, { useEffect, useState } from "react";
import Resume from "../../utils/resume.json";
import Resumen from "../../utils/resumen.json";
import Me from "../../assets/DG.png";
import "./style.css";

interface aboutProps {
  language: string;
}

export const About = ({ language }: aboutProps) => {
  const [content, setContent] = useState<any>();
  useEffect(() => {
    if (language === "es") {
      setContent(
        <>
          <h2>Hola Pues!</h2>
          <p>{Resumen.basics.description}</p>
        </>
      );
    } else {
      setContent(
        <>
          <h2>Hello There!</h2>
          <p>{Resume.basics.description}</p>
        </>
      );
    }
  }, [language]);

  return (
    <section id="about">
      <div className="about">
        <div className="me-img">
          <img src={Me} alt="David Gomez" className="me" />
        </div>
        <div className="container-text-about">{content}</div>
      </div>
    </section>
  );
};
