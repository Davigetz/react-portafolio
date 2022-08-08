import React from "react";
import "./style.css";
import Resume from "../../utils/resume.json";
import { ToggleTheme } from "../ApplyTheme/toggleTheme";

export const Content = ({ marginTop }: { marginTop: Number }) => {
  return (
    <div className="container" style={{ marginTop: `${marginTop}px` }}>
      <h5 className="title">{Resume.basics.name}</h5>
      <h2 className="title">{Resume.basics.job1} +</h2>
      <h2 className="title">{Resume.basics.job2}</h2>
    </div>
  );
};
