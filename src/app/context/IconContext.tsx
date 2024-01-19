"use client";
import React, { FC, ReactElement } from "react";
import { IconContext } from "react-icons";

type IconContextProviderProps = {
  children: any | JSX.Element | JSX.Element[];
};

const IconContextProvider: FC<IconContextProviderProps> = ({ children }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "1.8rem" }}>
        {children}
      </IconContext.Provider>
    </div>
  );
};

export default IconContextProvider;
