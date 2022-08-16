import { useEffect, useState } from "react";
import { ToggleTheme } from "../ApplyTheme/toggleTheme";
import { Logo } from "../Logo";
import { stateProps } from "../sideBar";
import "./style.css";

export interface NavigationProps {
  state: {
    root: Number | undefined;
    containerHome: Number | undefined;
  };
  language: string;
}

export const Navigation = ({ state, language }: NavigationProps) => {
  const [activeNav, setActiveNav] = useState("#");
  const [textos, setTextos] = useState({
    home: "",
    proyects: "",
    about: "",
    contact: "",
  });

  useEffect(() => {
    if (language === "es") {
      setTextos({
        ...textos,
        home: "Casa",
        proyects: "Proyectos",
        about: "Acerca",
        contact: "Contacto",
      });
    } else {
      setTextos({
        ...textos,
        home: "Home",
        proyects: "Projects",
        about: "About",
        contact: "Contact",
      });
    }
  }, [language]);

  return (
    <nav className="navi">
      {state.root! > 750 && (
        <>
          <a href="#">
            <div className="container-logo radial">
              <Logo deseo={15} />
            </div>
          </a>

          <a
            href="#"
            className={activeNav === "#" ? "active" : "no-active"}
            onClick={() => setActiveNav("#")}
          >
            {textos.home}
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : "no-active"}
          >
            {textos.proyects}
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : "no-active"}
          >
            {textos.about}
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : "no-active"}
          >
            {textos.contact}
          </a>
        </>
      )}
      <ToggleTheme />
    </nav>
  );
};
