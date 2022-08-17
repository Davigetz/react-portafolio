import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { About } from "../../components/About";
import { ToggleTheme } from "../../components/ApplyTheme/toggleTheme";
import { Contact } from "../../components/Contact";
import { Content } from "../../components/Content";
import { Navigation } from "../../components/Navigation";
import { SideBar, stateProps } from "../../components/sideBar";
import { Works } from "../../components/Works";
import { RootState } from "../../redux/store";
import "./style.css";

export const Home = () => {
  const [language, setLanguage] = useState("en");
  const langDesire = useSelector((state: RootState) => state.language.language);
  const [state, setState] = useState<{
    root: Number | undefined;
    containerHome: Number | undefined;
  }>({ root: 0, containerHome: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  const getSize = () => {
    const newWidth = ref.current?.clientWidth;
    const newRootWidth = document.getElementById("root")?.clientWidth;

    setState({ ...state, root: newRootWidth, containerHome: newWidth });
  };
  useEffect(() => {
    getSize();
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);

  useEffect(() => {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    console.log(userLocale);
    const predoLanguage = userLocale.split("-")[0];
    if (predoLanguage === "es") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }, []);

  useEffect(() => {
    if (langDesire === "es") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }, [langDesire]);

  return (
    <div className="container-nav" ref={ref}>
      <Navigation state={state} language={language} />
      <SideBar state={state} language={language} />
      <Content marginTop={0} language={language} />
      <Works language={language} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
};
