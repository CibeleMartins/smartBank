import React from "react";
import { Route, Routes } from "react-router-dom";
import Teste from "../pages/Teste";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/allMap"/>
        <Route exact path="/teste" element={<Teste/>} />
      </Routes>
    </>
  );
};

export default Rotas;