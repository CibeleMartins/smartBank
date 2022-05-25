import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Rotas from './routes/index';
import Header from './components/Header/Header';
import {GlobalStyle} from './components/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;