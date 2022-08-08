import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  children?: React.ReactNode;
};

export const ApplyTheme: React.FC<Props> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const updateCSSVariables = (
    theme: { [s: string]: string } | ArrayLike<string>
  ) => {
    const arrayOfVariableKeys = Object.keys(theme);
    const arrayOfVariableValues = Object.values(theme);

    arrayOfVariableKeys.forEach((cssVariableKey, index) => {
      document.documentElement.style.setProperty(
        cssVariableKey,
        arrayOfVariableValues[index]
      );
    });
  };

  useEffect(() => {
    updateCSSVariables(theme);
  }, [theme]);

  return <>{children}</>;
};
