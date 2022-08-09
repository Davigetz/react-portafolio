import React from "react";
import "./style.css";
import Resume from "../../utils/resume.json";
import { ToggleTheme } from "../ApplyTheme/toggleTheme";

export const Content = ({ marginTop }: { marginTop: Number }) => {
  return (
    <section
      id="#"
      className="container"
      style={{ marginTop: `${marginTop}px` }}
    >
      <h4 className="title name">{Resume.basics.name}</h4>
      <h1 className="title job">{Resume.basics.job1} +</h1>
      <h1 className="title job">{Resume.basics.job2}</h1>
    </section>
  );
};
