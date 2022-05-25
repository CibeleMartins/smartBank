import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from '../components/Container/index'

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container/>}/>
      </Routes>
    </>
  );
};

export default Rotas;