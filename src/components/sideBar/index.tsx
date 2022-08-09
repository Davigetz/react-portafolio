import { useState } from "react";
import Resume from "../../utils/resume.json";
import { Logo } from "../Logo";
import "./style.css";

export interface stateProps {
  state: {
    root: Number | undefined;
    containerHome: Number | undefined;
  };
}

export const SideBar: React.FC<stateProps> = ({ state }) => {
  const [clicked, setClicked] = useState(false);
  console.log(state);
  return (
    <div
      className="sidebar"
      style={{
        left: `${
          +state.root! <= +state.containerHome!
            ? 0
            : (+state.root! - +state.containerHome!) / 2
        }px`,
        width: `${clicked ? 240 : 40}px`,
      }}
    >
      <div className="logo_content">
        <div
          className="logo"
          style={{ opacity: `${clicked ? 1 : 0}`, minWidth: "250px" }}
        >
          <a href="#">
            <div className="container-logo radial side">
              <Logo deseo={10} />
            </div>
          </a>
          <div
            className="logo_name"
            style={{
              opacity: `${clicked ? 1 : 0}`,
              display: `${clicked ? "block" : "none"}`,
            }}
          >
            David Gómez
          </div>
        </div>
        <i
          className="fa-solid fa-bars"
          id="btn"
          onClick={() => setClicked(!clicked)}
          style={{ left: `${clicked ? "90%" : "50%"}` }}
        ></i>
      </div>
      <ul className="nav_list">
        {/* <li className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
          <span className={`tooltip ${clicked ? "active" : ""}`}>Search</span>
        </li> */}
        <li>
          <a href={Resume.basics.profiles[0].url}>
            <i className="fa-brands fa-google"></i>
            <span
              className="link_name"
              style={{
                opacity: `${clicked ? 1 : 0}`,
                pointerEvents: `${clicked ? "auto" : "none"}`,
                display: `${clicked ? "block" : "none"}`,
                fontSize: `${15}px`,
              }}
            >
              {Resume.basics.profiles[0].username}
            </span>
          </a>
          <span className={`tooltip ${clicked ? "active" : ""}`}>
            {Resume.basics.profiles[0].network}
          </span>
        </li>
        <li>
          <a href={Resume.basics.profiles[1].url} target="_blank">
            <i className="fab fa-linkedin-in"></i>
            <span
              className="link_name"
              style={{
                opacity: `${clicked ? 1 : 0}`,
                pointerEvents: `${clicked ? "auto" : "none"}`,
                display: `${clicked ? "block" : "none"}`,
                fontSize: `${15}px`,
              }}
            >
              {Resume.basics.profiles[1].username}
            </span>
          </a>
          <span className={`tooltip ${clicked ? "active" : ""}`}>
            {Resume.basics.profiles[1].network}
          </span>
        </li>
        <li>
          <a href={Resume.basics.profiles[2].url} target="_blank">
            <i className="fa-brands fa-github"></i>
            <span
              className="link_name"
              style={{
                opacity: `${clicked ? 1 : 0}`,
                pointerEvents: `${clicked ? "auto" : "none"}`,
                display: `${clicked ? "block" : "none"}`,
                fontSize: `${15}px`,
              }}
            >
              {Resume.basics.profiles[2].username}
            </span>
          </a>
          <span className={`tooltip ${clicked ? "active" : ""}`}>
            {Resume.basics.profiles[2].network}
          </span>
        </li>
        {state.root! < 700 && (
          <>
            <li>
              <a href="#projects">
                <i className="fa-solid fa-bars-progress"></i>
                <span
                  className="link_name"
                  style={{
                    opacity: `${clicked ? 1 : 0}`,
                    pointerEvents: `${clicked ? "auto" : "none"}`,
                    display: `${clicked ? "block" : "none"}`,
                    fontSize: `${15}px`,
                  }}
                >
                  Projects
                </span>
              </a>
              <span className={`tooltip ${clicked ? "active" : ""}`}>
                Projects
              </span>
            </li>
            <li>
              <a href="#about">
                <i className="fa-solid fa-user-tie"></i>
                <span
                  className="link_name"
                  style={{
                    opacity: `${clicked ? 1 : 0}`,
                    pointerEvents: `${clicked ? "auto" : "none"}`,
                    display: `${clicked ? "block" : "none"}`,
                    fontSize: `${15}px`,
                  }}
                >
                  About
                </span>
              </a>
              <span className={`tooltip ${clicked ? "active" : ""}`}>
                About
              </span>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-house-user"></i>
                <span
                  className="link_name"
                  style={{
                    opacity: `${clicked ? 1 : 0}`,
                    pointerEvents: `${clicked ? "auto" : "none"}`,
                    display: `${clicked ? "block" : "none"}`,
                    fontSize: `${15}px`,
                  }}
                >
                  Home
                </span>
              </a>
              <span className={`tooltip ${clicked ? "active" : ""}`}>Home</span>
            </li>
            <li>
              <a href="#contact">
                <i className="fa-solid fa-circle-info"></i>
                <span
                  className="link_name"
                  style={{
                    opacity: `${clicked ? 1 : 0}`,
                    pointerEvents: `${clicked ? "auto" : "none"}`,
                    display: `${clicked ? "block" : "none"}`,
                    fontSize: `${15}px`,
                  }}
                >
                  Contact
                </span>
              </a>
              <span className={`tooltip ${clicked ? "active" : ""}`}>
                Contact
              </span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
