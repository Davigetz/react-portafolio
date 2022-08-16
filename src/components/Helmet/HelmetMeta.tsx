import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Resume from "../../utils/resume.json";
import Resumen from "../../utils/resumen.json";
import Settings from "../../utils/settings.json";

interface helmetProps {
  language: string;
}

export const HelmetMeta = ({ language }: helmetProps) => {
  return (
    <Helmet>
      <meta name="theme-color" content={Settings.colors.primary} />
      <title>
        {Resume.basics.name} | {Resume.basics.location.city},{" "}
        {Resume.basics.location.country}
      </title>
      <meta
        name="description"
        content={
          language === "es"
            ? Resumen.basics.description
            : Resume.basics.description
        }
      />
      <meta
        name="keywords"
        content={
          language === "es" ? Resumen.basics.keywords : Resume.basics.keywords
        }
      />
    </Helmet>
  );
};
