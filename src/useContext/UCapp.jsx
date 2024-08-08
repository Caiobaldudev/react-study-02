import React from "react";
import UserContext from "./UserContext";
import Produto from "./Produto";

const UCapp = () => {
  return (
    <UserContext.Provider value={{nome: 'Caio'}}>
      <Produto />
    </UserContext.Provider>
  );
};

export default UCapp;
