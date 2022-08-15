import React, { useEffect, useState } from "react";
import "./style.css";
import Resume from "../../utils/resume.json";
import Resumen from "../../utils/resumen.json";
import { ToggleTheme } from "../ApplyTheme/toggleTheme";

interface contentProps {
  marginTop: Number;
  language: string;
}

export const Content = ({ marginTop, language }: contentProps) => {
  const [content, setContent] = useState<any>();
  useEffect(() => {
    if (language === "es") {
      setContent(
        <>
          <h4 className="title name">{Resumen.basics.name}</h4>
          <h1 className="title job">{Resumen.basics.job1} +</h1>
          <h1 className="title job">{Resumen.basics.job2}</h1>
        </>
      );
    } else {
      setContent(
        <>
          <h4 className="title name">{Resume.basics.name}</h4>
          <h1 className="title job">{Resume.basics.job1} +</h1>
          <h1 className="title job">{Resume.basics.job2}</h1>
        </>
      );
    }
  }, [language]);
  console.log(content);
  return (
    <section
      id="#"
      className="container"
      style={{ marginTop: `${marginTop}px` }}
    >
      <div className="titles-container">{content}</div>
    </section>
  );
};
