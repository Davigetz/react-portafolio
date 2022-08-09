import { createRef, useEffect, useRef, useState } from "react";
import Icons from "../../utils/icons.json";
import Proyects from "../../utils/proyects.json";
import "./style.css";

export const Works = () => {
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

  console.log(windowSize);

  return (
    <section id="projects" style={{ marginTop: "4em" }}>
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
    </section>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
