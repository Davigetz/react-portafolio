import { useState } from "react";
import { ToggleTheme } from "../ApplyTheme/toggleTheme";
import { Logo } from "../Logo";
import { stateProps } from "../sideBar";
import "./style.css";

export const Navigation = ({ state }: stateProps) => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="navi">
      {state.root! > 700 && (
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
            Home
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : "no-active"}
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : "no-active"}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : "no-active"}
          >
            Contact
          </a>
        </>
      )}
      <ToggleTheme />
    </nav>
  );
};