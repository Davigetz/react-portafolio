import { useEffect, useRef, useState } from "react";
import { ToggleTheme } from "../../components/ApplyTheme/toggleTheme";
import { Content } from "../../components/Content";
import { Navigation } from "../../components/Navigation";
import { SideBar, stateProps } from "../../components/sideBar";
import "./style.css";

export const Home = () => {
  const [state, setState] = useState<{
    root: Number | undefined;
    containerHome: Number | undefined;
  }>({ root: 0, containerHome: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  const getSize = () => {
    const newWidth = ref.current?.clientWidth;
    const newRootWidth = document.getElementById("root")?.clientWidth;
    console.info("root");
    console.log(newRootWidth);
    console.info("width");
    console.log(newWidth);

    setState({ ...state, root: newRootWidth, containerHome: newWidth });
  };
  useEffect(() => {
    getSize();
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);
  return (
    <div className="container-nav" ref={ref}>
      <Navigation />
      <SideBar state={state} />
      <Content marginTop={0} />
    </div>
  );
};
