import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
export const ToggleTheme = () => {
  const [press, setPress] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={"switch-container"} onClick={() => setPress(!press)}>
      <label className={`${press ? "labele active" : "labele"}`}>
        <i className={`fa-solid ${press ? "fa-moon active" : "fa-moon"}`}></i>
        <i className={`fa-solid ${press ? "fa-sun active" : "fa-sun"}`}></i>

        <span className={`${press ? "ball active" : "ball"}`}></span>
      </label>
    </div>
  );
};
