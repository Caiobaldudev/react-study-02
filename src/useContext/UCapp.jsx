import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

const UCapp = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default UCapp;
