import { createRef, useEffect, useRef, useState } from "react";
import Icons from "../../utils/icons.json";
import Proyects from "../../utils/proyects.json";
import Proyectos from "../../utils/proyectos.json";
import "./style.css";

interface worksProps {
  language: string;
}
export const Works = ({ language }: worksProps) => {
  const [content, setContent] = useState<any>();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(document.documentElement.lang);

  useEffect(() => {
    if (language === "es") {
      setContent(
        <>
          {Proyectos.map((proyect, index) => (
            <div className="proyect" key={proyect.id}>
              <div className="image-wrapper">
                <img
                  src={proyect.images[0]}
                  alt={proyect.title}
                  className="proyects-imgs"
                />
              </div>
              <div className="content-wrapper">
                <h3>{proyect.id + ". " + proyect.title}</h3>
                {proyect.descriptions.map((description) => (
                  <p>{description}</p>
                ))}
                <div className="linkes">
                  <a href={proyect.repositorio} target="_blank">
                    <p>
                      Repository: <i className="fa-brands fa-github"></i>
                    </p>
                  </a>
                  <a href={proyect.link} target="_blank">
                    <p>
                      Link: <i className="fa-solid fa-globe"></i>
                    </p>
                  </a>
                </div>
              </div>
              <div className="icons">
                {proyect.tecnologies.map((tec) => {
                  const encontrado = Icons.find((icon) => icon.name === tec);
                  return (
                    <>
                      {encontrado?.src !== undefined ? (
                        <img
                          src={encontrado.src}
                          alt={encontrado?.name}
                          style={{
                            maxWidth: "30px",
                            padding: "10px",
                          }}
                        />
                      ) : (
                        <p
                          style={{
                            padding: " 0 10px",
                            fontSize: "11px",
                          }}
                        >
                          {encontrado?.name}
                        </p>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      );
    } else {
      setContent(
        <>
          {Proyects.map((proyect, index) => (
            <div className="proyect" key={proyect.id}>
              <div className="image-wrapper">
                <img
                  src={proyect.images[0]}
                  alt={proyect.title}
                  className="proyects-imgs"
                />
              </div>
              <div className="content-wrapper">
                <h3>{proyect.id + ". " + proyect.title}</h3>
                {proyect.descriptions.map((description) => (
                  <p>{description}</p>
                ))}
                <div className="linkes">
                  <a href={proyect.repositorio} target="_blank">
                    <p>
                      Repository: <i className="fa-brands fa-github"></i>
                    </p>
                  </a>
                  <a href={proyect.link} target="_blank">
                    <p>
                      Link: <i className="fa-solid fa-globe"></i>
                    </p>
                  </a>
                </div>
              </div>
              <div className="icons">
                {proyect.tecnologies.map((tec) => {
                  const encontrado = Icons.find((icon) => icon.name === tec);
                  return (
                    <>
                      {encontrado?.src !== undefined ? (
                        <img
                          src={encontrado.src}
                          alt={encontrado?.name}
                          style={{
                            maxWidth: "30px",
                            padding: "10px",
                          }}
                        />
                      ) : (
                        <p
                          style={{
                            padding: " 0 10px",
                            fontSize: "11px",
                          }}
                        >
                          {encontrado?.name}
                        </p>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      );
    }
  }, [language]);

  return (
    <section id="projects" style={{ marginTop: "4em" }}>
      {content}
    </section>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
